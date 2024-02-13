import React from 'react';

const Blogs = () => {
  return (
    <section className="tf__blog pt_125 xs_pt_75 pb_40 xs_pb_0" id="blogs">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-9 mb_30">
            <div className="tf__section_heading">
              <h5 className="has-animation">My blog</h5>
              <h2 className="has-animation">
                Unlocking the potential of your personal brand
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog fade_left" data-trigerId="blogs">
              <a
                href="blog_details.html"
                className="tf__blog_img"
                data-cursor="read <br> more"
              >
                <img
                  src="assets/images/blog/1.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
              </a>
              <div className="tf__blog_text">
                <span>31 December,2022</span>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user"></i> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments"></i> Comments (05)
                  </li>
                </ul>
                <a href="blog_details.html">The standard personal My portfolio</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog fade_left" data-trigerId="blogs">
              <a
                href="blog_details.html"
                className="tf__blog_img"
                data-cursor="read <br> more"
              >
                <img
                  src="assets/images/blog/2.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
              </a>
              <div className="tf__blog_text">
                <span>31 December,2022</span>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user"></i> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments"></i> Comments (05)
                  </li>
                </ul>
                <a href="blog_details.html">The standard personal My portfolio</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog fade_left" data-trigerId="blogs">
              <a
                href="blog_details.html"
                className="tf__blog_img"
                data-cursor="read <br> more"
              >
                <img
                  src="assets/images/blog/3.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
              </a>
              <div className="tf__blog_text">
                <span>31 December,2022</span>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user"></i> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments"></i> Comments (05)
                  </li>
                </ul>
                <a href="blog_details.html">The standard personal My portfolio</a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <a href="blog_list.html" className="common_btn">More Blog +</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
