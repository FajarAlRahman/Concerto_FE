import React from "react";
import "./footer.css";

import linkedInImg from '../../../assets/img/linkedin.svg';
import twitterImg from '../../../assets/img/twitter.svg';
import facebookImg from '../../../assets/img/facebook.svg';

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="footer">
        <div className="container-fluid mx-5">
          <div className="overlap-footer">
            <div className="description">
              <a className="footer-brand" href="#">concerto.</a>
              <p className="text-description">concerto adalah platform layanan penjualan tiket konser musik
                yang memungkinkan siapa saja membuat, berbagi, menemukan, dan menghadiri acara yang
                mengobarkan semangat dan memperkaya kehidupan mereka.</p>
              <div className="social-media">
                <img className="icon-social-media" src={facebookImg} alt="facebook Img" />
                <img className="icon-social-media" src={twitterImg} alt="twitter Img" />
                <img className="icon-social-media" src={linkedInImg} alt="linkedIn Img" />
              </div>
            </div>

            <div className="my-account">
              <h1 className="concerto-1">
                concerto
                <span className="titik">.</span>
              </h1>
              <p className="tentang-kami-hubungi">
                Tentang kami&nbsp;&nbsp;
                <br />
                Hubungi kami <br />
                Bagaimana itu bekerja <br />
                Ketentuan
              </p>
            </div>

            <div className="stay-in-the-loop">
              <div className="title-text-stay">Dapatkan Informasi Terbaru</div>
              <p className="text-stay">
                Bergabunglah dengan email kami untuk terus mengikuti perkembangan terbaru kami untuk Acara dan konser
                musik
              </p>

              <div className="field-email">
                <form action="">
                  <div className="input mb-3">
                    <input type="text" className="form-control text-form" placeholder="Masukkan alamat email Anda..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="ikuti-sekarang" type="button" id="button-addon2">Ikuti Sekarang</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright-line" ></div>
          <div className="copyright">
            <p className="copyright-text">Copyright © 2024 Garuda Akasha</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
