import React from 'react'

function Skills() {
  return (
    <>
    <section className="tf__skills pt_115 xs_pt_75 pb_70 xs_pb_30" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-8 m-auto mb_60">
              <div className="tf__section_heading mb_40">
                <h5 className="has-animation">Education &amp; Skill</h5>
                <h2 className="has-animation">
                  Showcasing your talent <br />
                  amplifying your impact
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tf__single_skills fade_bottom" data-trigerid="skills" data-stagger=".13">
                <span>2014 - 2018</span>
                <h3>Wordpress and End Developer</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit sed thisnquia consequuntur magni dolores eos qui
                  ratione voluptatem
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__single_skills fade_bottom" data-trigerid="skills" data-stagger=".25">
                <span>2012 - 2014</span>
                <h3>Python Developer</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit sed thisnquia consequuntur magni dolores eos qui
                  ratione voluptatem
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__single_skills fade_bottom" data-trigerid="skills" data-stagger=".25">
                <span>2005 - 2009</span>
                <h3>Kent State University</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit sed thisnquia consequuntur magni dolores eos qui
                  ratione voluptatem
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__single_skills fade_bottom" data-trigerid="skills" data-stagger=".25">
                <span>2009 - 2012</span>
                <h3>User Experience Design</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit sed thisnquia consequuntur magni dolores eos qui
                  ratione voluptatem
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tf__team_skills_bar_single fade_bottom" data-trigerid="skills" data-stagger=".25">
                <p>HTML</p>
                <div id="bar1" className="barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span className="fill" data-percentage={75} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__team_skills_bar_single fade_bottom" data-trigerid="skills" data-stagger=".25">
                <p>Python</p>
                <div id="bar2" className="barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span className="fill" data-percentage={90} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__team_skills_bar_single fade_bottom" data-trigerid="skills" data-stagger=".25">
                <p>CSS</p>
                <div id="bar3" className="barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span className="fill" data-percentage={80} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__team_skills_bar_single fade_bottom" data-trigerid="skills" data-stagger=".25">
                <p>Photoshop</p>
                <div id="bar4" className="barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span className="fill" data-percentage={70} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__team_skills_bar_single fade_bottom" data-trigerid="skills" data-stagger=".25">
                <p>Java Script</p>
                <div id="bar5" className="barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span className="fill" data-percentage={70} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__team_skills_bar_single fade_bottom" data-trigerid="skills" data-stagger=".25">
                <p>Figma</p>
                <div id="bar6" className="barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span className="fill" data-percentage={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills