import React from 'react'

function Projects() {
  return (
    <>
     <section className="tf__portfolio mt_120 xs_mt_80" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-9 mb_30">
              <div className="tf__section_heading">
                <h5 className="has-animation">my recent Portfolio</h5>
                <h2 className="has-animation">
                  Elevate your brand to new <br />
                  heights with our portfolio expertise
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-md-6">
              <a href="https://www.youtube.com/watch?v=B-ytMSuwbf8" className="tf__portfolio_item play_btn" data-cursor="Watch <br> video">
                <img src="assets/images/portfolio/1.jpg" alt="portfolio" className="img-fluid w-100" />
                <div className="text">
                  <h4>sheet metal bending</h4>
                  <p>youtube</p>
                </div>
              </a>
            </div>
            <div className="col-xl-4 col-md-6">
              <a className="tf__portfolio_item play_btn" href="https://vimeo.com/132528823" data-cursor="Watch <br> video">
                <img src="assets/images/portfolio/2.jpg" alt="portfolio" className="img-fluid w-100" />
                <div className="text">
                  <h4>sheet metal bending</h4>
                  <p>Vimeo</p>
                </div>
              </a>
            </div>
            <div className="col-xl-6 col-md-6">
              <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1" className="tf__portfolio_item play_btn" data-cursor="Audio <br> sound">
                <img src="assets/images/portfolio/3.jpg" alt="portfolio" className="img-fluid w-100" />
                <div className="text">
                  <h4>sheet metal bending</h4>
                  <p>soundcloud</p>
                </div>
              </a>
            </div>
            <div className="col-xl-6 col-md-6">
              <a href="images/portfolio/4.jpg" className="tf__portfolio_item image_popup" data-cursor="View <br> Image">
                <img src="assets/images/portfolio/4.jpg" alt="portfolio" className="img-fluid w-100" />
                <div className="text">
                  <h4>sheet metal bending</h4>
                  <p>Image</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects