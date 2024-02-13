import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="pt_120 xs_pt_80 sm_pt_80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="tf__footer_content fade_right" data-trigerId="footer" data-stagger=".25">
                  <div className="icon">
                    <div className="icon-contianer">
                      <img
                        src="assets/svg/map.svg"
                        alt="footer"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tf__footer_content fade_right" data-trigerId="footer" data-stagger=".25">
                  <div className="icon">
                    <div className="icon-contianer">
                      <img
                        src="assets/svg/phone.svg"
                        alt="footer"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>Lets talk us</h3>
                    <a href="tel:1234567890">(603) 555-0123</a>
                    <a href="tel:1234567890">(603) 555-0123</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tf__footer_content fade_right" data-trigerId="footer" data-stagger=".25">
                  <div className="icon">
                    <div className="icon-contianer">
                      <img
                        src="assets/svg/envelope.svg"
                        alt="footer"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>Send us email</h3>
                    <a href="mailto:example@gmail.com">deanna.curtis@example.com</a>
                    <a href="mailto:example@gmail.com">curtis@example.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tf__footer_copyright">
                  <p>© CodeeFly 2023 | All Rights Reserved</p>
                  <ul>
                    <li>
                      <a href="#" className="text_hover_animaiton">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#" className="text_hover_animaiton">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="text_hover_animaiton">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
