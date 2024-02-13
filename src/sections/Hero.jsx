import React from "react";

function Hero() {
  return (
    <>
      <section
        className="tf__banner banner"
        style={{ background: "url(assets/images/bg/banner.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div className="tf__banner_text">
                <h1>
                  Building the bridge between stars and
                  <span className="cd-headline rotate-1">
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Growth</b>
                      <b>Love</b>
                      <b>Freedom</b>
                    </span>
                  </span>
                </h1>
                <p>
                  Building the bridge between stars and stories Helping in
                  building brand with marketing, content creation, content
                  strategy
                </p>
                <ul>
                  <li>
                    <a className="common_btn" href="#">
                      Download Cv{" "}
                      <i className="fa-solid fa-arrow-down-to-line" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="banner_video_btn play_btn"
                      href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                    >
                      <i className="fa-sharp fa-solid fa-circle-play" /> Watch
                      the Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="tf__banner_img">
                <div className="img">
                  <img
                    src="assets/images/banner_img_1.png"
                    alt="ZYAN"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
