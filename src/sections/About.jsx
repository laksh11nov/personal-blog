import React from 'react'

function About() {
  return (
    <>
      <section className="tf__about pt_140 xs_pt_80" id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-7 col-lg-6 col-xl-6">
            <div className="tf__section_heading pb_80 xs_pb_50">
              <h5 className="has-animation">About Me</h5>
              <h2 className="has-animation">
                Transforming visions into exceptional portfolios
              </h2>
            </div>
            <div className="tf__about_text">
              <p>
                Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                aut odit auting fugit sed thisnquia consequuntur magni dolores
                eos designer heresm qui ratione
              </p>
              <a className="common_btn" href="#">
                Download Cv <i className="fa-solid fa-arrow-down-to-line"></i>
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 col-xl-6">
            <div className="tf__about_img fade_right" data-trigerid="about">
              <img
                src="assets/images/about_img.jpg"
                alt="ZYAN"
                className="img-fluid w-100"
              />
              <div className="tf__about_img_text">
                <i className="fas fa-chart-pie-alt"></i>
                <div className="tf__about_content">
                  <h4>Daily Activity</h4>
                  <p>Loream is ispam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  )
}

export default About