import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg main_menu">
    <div className="container main_menu_bg">
      <a className="navbar-brand" href="/">
        <img src="assets/images/logo.png" alt="ZYAN" className="img-fluid w-100" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-sharp fa-regular fa-bars bar_icon" />
        <i className="fa-regular fa-xmark close_icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <NavLink to={"/"}>
        <li className="nav-item">
            <a className="nav-link text_hover_animaiton active" href="home">
              home
            </a>
          </li>
          </NavLink>
          <li className="nav-item">
            <a className="nav-link text_hover_animaiton" href="/#about">
              about us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text_hover_animaiton" href="/#service">
              services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text_hover_animaiton" href="/#projects">
              Projects
            </a>
          </li>
          <NavLink to={"/blog"}>
          <li className="nav-item">
            <a className="nav-link text_hover_animaiton" href="blog">
              Blog
            </a>
          </li>
          </NavLink>
          <NavLink to={"/contact-us"}>
          <li className="nav-item">
            <a className="nav-link text_hover_animaiton" href="contact-us">
              contact
            </a>
          </li>
          </NavLink>
        </ul>
        <span
          className="toggle_icon c-pointer"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-sharp fa-sharp fa-regular fa-bars bar_icon-staggered" />
        </span>
      </div>
    </div>
  </nav>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
    <div className="offcanvas-header">
      <a className="offcanvas-logo" href="index_2.html">
        <img src="assets/images/logo2.png" alt="ZAYAN" className="img-fluid w-100" />
      </a>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="fa-regular fa-xmark" />
      </button>
    </div>
    <div className="offcanvas-body">
      <div className="tf__design_form offcanvas_form">
        <div className="offcanvas-content-box">
          <h4 className="offcanvas_title">About us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et magna aliqua. Ut enim ad minim veniam
            laboris.
          </p>
        </div>
        <div className="offcanvas_contact_form">
          <h4 className="offcanvas_title">Get In Touch</h4>
          <form action="#">
            <input
              type="text"
              placeholder="Your Name"
              aria-autocomplete="list"
            />
            <input type="email" placeholder="Your Email" />
            <textarea rows={4} placeholder="Message" defaultValue={""} />
            <button type="submit" className="common_btn">
              submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Navbar