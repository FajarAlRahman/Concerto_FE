import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BsArrowLeft, BsThreeDotsVertical, BsEmojiSmile, BsSend } from "react-icons/bs";
import "./chat.css";
import profileImg from "../../assets/img/profile.jpeg";

const Chat = () => {
    const navigate = useNavigate();
    const { friendId } = useParams();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [friendName, setFriendName] = useState("");
    const chatAreaRef = useRef(null);
    const senderId = parseInt(sessionStorage.getItem("userId"), 10); // Fetch sender_id from session storage

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/chat/messages`, {
                    params: {
                        sender_id: senderId,
                        receiver_id: friendId
                    },
                    withCredentials: true
                });
                setMessages(response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        const fetchFriendDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/chat/user/${friendId}`, {
                    withCredentials: true
                });
                setFriendName(response.data.full_name);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchMessages();
        fetchFriendDetails();
    }, [friendId, senderId]);

    const handleSend = async () => {
        if (inputValue.trim() !== "") {
            const newMessage = {
                sender_id: senderId,
                receiver_id: parseInt(friendId, 10),
                message: inputValue
            };

            try {
                await axios.post('http://localhost:3000/chat/send', newMessage, { withCredentials: true });
                setMessages([...messages, { ...newMessage, created_at: new Date().toISOString() }]);
                setInputValue("");
            } catch (error) {
                console.error("Error sending message:", error);
            }
        }
    };

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="teman">
            <header className="header">
                <div className="left-header">
                    <button className="btn-header" onClick={() => navigate('../teman')}>
                        <BsArrowLeft className="icon-header" />
                    </button>
                    <div className="detail-user">
                        <img src={profileImg} alt="" className="profile-user" />
                        <div className="status-user">
                            <h3>{friendName}</h3>
                            <h5>• Online</h5>
                        </div>
                    </div>
                </div>
                <button className="btn-header">
                    <BsThreeDotsVertical className="icon-header" />
                </button>
            </header>

            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="chat-area" ref={chatAreaRef}>
                        {messages.map(message => (
                            <div key={message.id || message.created_at} className={message.sender_id === senderId ? "user-area" : "anotherUser-area"}>
                                <div className={message.sender_id === senderId ? "box-user" : "box-anotherUser"}>
                                    {message.sender_id !== senderId && <img src={profileImg} alt="" className="profile-user" />}
                                    <div className={message.sender_id === senderId ? "bubble-chat-user" : "bubble-chat-anotherUser"}>
                                        <p>{message.message}</p>
                                        <div className="waktu-chat">{new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="input-group">
                        <button className="btn-chat-bar" type="button">
                            <BsEmojiSmile className="btn-chat-icon" />
                        </button>
                        <input
                            type="text"
                            className="form-control text-chat"
                            placeholder="Message..."
                            aria-label="Example text with two button addons"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                        />
                        <button className="btn-chat-bar" type="button" onClick={handleSend}>
                            <BsSend className="btn-chat-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
