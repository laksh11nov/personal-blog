import React from 'react'
import Navbar from '../components/Navbar'
import BreadcrumbBanner from '../components/BreadcrumbBanner'

function BlogList() {
  return (
    <>
    <Navbar/>
    <BreadcrumbBanner pageName={"Blog List"}/>
    <section className="tf__blog_list_page pt_120 xs_pt_80 pb_120 xs_pb_80" id="blogs">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-8">
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__blog_list_item">
              <a href="/blogdetail" data-cursor="Read <br> More" className="tf__blog_list_img">
                <img src="assets/images/blog/list_1.jpg" alt="blog list" className="img-fluid w-100" />
                <span><b>28</b> june</span>
              </a>
              <div className="tf__blog_list_text">
                <a href="/blogdetail">Empowering your business with innovative solutions
                  Revolutionizing your solutions</a>
                <p>
                  Voluptate ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat […]
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tf__blog_list_item">
              <a href="/blogdetail" data-cursor="Read <br> More" className="tf__blog_list_img">
                <img src="assets/images/blog/list_2.jpg" alt="blog list" className="img-fluid w-100" />
                <span><b>28</b> june</span>
              </a>
              <div className="tf__blog_list_text">
                <a href="/blogdetail">Empowering your business with innovative solutions
                  Revolutionizing your solutions</a>
                <p>
                  Voluptate ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat […]
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tf__blog_list_item">
              <a href="/blogdetail" data-cursor="Read <br> More" className="tf__blog_list_img">
                <img src="assets/images/blog/list_3.jpg" alt="blog list" className="img-fluid w-100" />
                <span><b>28</b> june</span>
              </a>
              <div className="tf__blog_list_text">
                <a href="/blogdetail">Empowering your business with innovative solutions
                  Revolutionizing your solutions</a>
                <p>
                  Voluptate ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat […]
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tf__pagination">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <i className="fa-regular fa-angle-left" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <i className="fa-regular fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4">
        <div className="tf__sidebar">
          <div className="tf__sidebar_item tf__sidebar_search">
            <h3>Search</h3>
            <form action="#">
              <input type="text" placeholder="Search your blog" />
              <button type="submit">
                <i className="fa-regular fa-magnifying-glass" />
              </button>
            </form>
          </div>
          <div className="tf__sidebar_item tf__sidebar_category mt_30">
            <h3>Category</h3>
            <ul>
              <li>
                <a href="/blogdetail">Business Advice <span>(02)</span></a>
              </li>
              <li>
                <a href="/blogdetail">Web design <span>(05)</span></a>
              </li>
              <li>
                <a href="/blogdetail">devolopment <span>(10)</span></a>
              </li>
              <li>
                <a href="/blogdetail">Video promotion <span>(03)</span></a>
              </li>
              <li>
                <a href="/blogdetail">Reabervede <span>(10)</span></a>
              </li>
              <li>
                <a href="/blogdetail">Ui/Ux design <span>(03)</span></a>
              </li>
            </ul>
          </div>
          <div className="tf__sidebar_item tf__sidebar_comments mt_30">
            <h3>Comments</h3>
            <ul>
              <li>
                <div className="img">
                  <img src="assets/images/blog/comment_1.jpg" alt="comment" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <a href="/blogdetail">Aliquam Eros Justo Posuere Loborti Per</a>
                  <p>By Arham saklia</p>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="assets/images/blog/comment_2.jpg" alt="comment" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <a href="/blogdetail">Aliquam Eros Justo Posuere Loborti Per</a>
                  <p>By Arham saklia</p>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="assets/images/blog/comment_3.jpg" alt="comment" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <a href="/blogdetail">Aliquam Eros Justo Posuere Loborti Per</a>
                  <p>By Arham saklia</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="tf__sidebar_item tf__sidebar_gallery mt_30 gallery_popup">
            <h3>Photo gallery</h3>
            <ul>
              <li>
                <a href="assets/images/sidebar/1.jpg">
                  <img src="assets/images/sidebar/1.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/2.jpg">
                  <img src="assets/images/sidebar/2.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/3.jpg">
                  <img src="assets/images/sidebar/3.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/4.jpg">
                  <img src="assets/images/sidebar/4.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/5.jpg">
                  <img src="assets/images/sidebar/5.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/6.jpg">
                  <img src="assets/images/sidebar/6.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/7.jpg">
                  <img src="assets/images/sidebar/7.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/8.jpg">
                  <img src="assets/images/sidebar/8.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
              <li>
                <a href="assets/images/sidebar/9.jpg">
                  <img src="assets/images/sidebar/9.jpg" alt="gallery1" className="img-fluid w-100" />
                  <div className="gal_img_overlay">
                    <i className="fa-sharp fa-solid fa-eye" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="tf__sidebar_item tf__sidebar_tags mt_30">
            <h3>Tags</h3>
            <ul>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Architecher</a>
              </li>
              <li>
                <a href="#">House</a>
              </li>
              <li>
                <a href="#">Interiour</a>
              </li>
              <li>
                <a href="#">Graphics</a>
              </li>
              <li>
                <a href="#">shidtarx</a>
              </li>
              <li>
                <a href="#">Start shape</a>
              </li>
              <li>
                <a href="#">UI/UX</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default BlogList