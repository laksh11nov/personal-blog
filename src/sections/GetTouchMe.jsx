import React from 'react'

function GetTouchMe() {
  return (
    <>
    <section className="tf__design mt_135 xs_mt_40 mb_120 xs_mb_80" id="counter">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tf__design_text">
              <h2>Design <span>and Innovation</span></h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam
              </p>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="tf__design_counter fade_left" data-trigerId="counter">
                  <span className="icon">
                    <img src="svg/complete-project.svg" alt="counter" className="svg img-fluid w-100" />
                  </span>
                  <h3><span className="counter">10</span>k+</h3>
                  <p>Complete project</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="tf__design_counter fade_left" data-trigerId="counter">
                  <span className="icon">
                    <img src="svg/client-review.svg" alt="counter" className="img-fluid w-100 svg" />
                  </span>
                  <h3><span className="counter">800</span>+</h3>
                  <p>Client review</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tf__design_form">
              <h2 className="has-animation">GET TOUCH ME?</h2>
              <p>
                For your car we will do everything advice design in us repairs
                and maintenance We are the some preferred.
              </p>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" />
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" />
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Message"></textarea>
                <button type="submit" className="common_btn">submit now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default GetTouchMe