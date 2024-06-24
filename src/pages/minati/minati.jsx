import React, { useState, useEffect } from "react";
import "./minati.css";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import axios from "axios";

export const Minati = () => {
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresResponse = await axios.get("http://localhost:3000/genres");
        const artistsResponse = await axios.get("http://localhost:3000/artists");
        setGenres(genresResponse.data);
        setArtists(artistsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleGenreSelect = (genre) => {
    setSelectedGenres((prev) => [...new Set([...prev, genre])]);
  };

  const handleArtistSelect = (artist) => {
    setSelectedArtists((prev) => [...new Set([...prev, artist])]);
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");
    const userPreferences = {
      userId,
      genres: selectedGenres,
      artists: selectedArtists,
    };

    try {
      const response = await axios.post("http://localhost:3000/preferences", userPreferences);
      if (response.status === 200) {
        localStorage.removeItem("userId");
        navigate("../login");
      } else {
        console.log("Registrasi gagal");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="minati">
        <div className="layer">
          <div className="header">
            <h1 className="text-header-1">Beritahu kami apa yang Anda minati?</h1>
            <h3 className="text-header-2">Pilih minimal 1 kategori</h3>
          </div>
          <div className="container">
            <div className="genre-section">
              <h3 className="label">Genre Musik</h3>
              <div className="choice">
                {genres.map((genre) => (
                  <Button key={genre.id} name={genre.name} onClick={() => handleGenreSelect(genre.name)} />
                ))}
              </div>
            </div>

            <div className="artis-section">
              <h3 className="label">Artis</h3>
              <div className="choice">
                {artists.map((artist) => (
                  <Button key={artist.id} name={artist.name} onClick={() => handleArtistSelect(artist.name)} />
                ))}
              </div>
            </div>

            <div className="btnNav">
              <button type="button" className="btn btnSkip" onClick={handleSubmit}>Lewati</button>
              <button type="button" className="btn btnNext" onClick={handleSubmit}>Lanjutkan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Minati;
