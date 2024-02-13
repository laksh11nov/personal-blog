import React from 'react';

const BreadcrumbBanner = ({pageName}) => {
  return (
    <section className="tf__breadcrumb banner" style={{background: 'url(assets/images/bg/breadcrumb.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__breadcrum_text">
              <h1>{pageName}</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/" className="text_hover_animaiton">Home</a>
                </li>
                <li><a href="">{pageName}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadcrumbBanner;
