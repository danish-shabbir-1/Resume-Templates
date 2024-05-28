import React from 'react';
import './App.css'; // Make sure to import your CSS
import prfImages from "./images/profileImage.png"

function App() {
  React.useEffect(() => {
    // Replace Feather icons after the component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div className="container">
      <div className="profile">
        <div className="profile_container">
          <div className="profile_profileImg">
            <img src={prfImages} alt="shaif arfan" />
          </div>
          <div>
            <h1 className="profile_name">
              <span className="profile_name_firstName">Shaif</span>
              <span className="profile_name_lastName">Arfan</span>
            </h1>
            <p className="profile_title">Software Developer</p>
            <p className="description profile_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <a className="downloadBtn" href="./cv.pdf" download="Resume.pdf">Download Resume</a>
          </div>
        </div>
      </div>

      <div className="group-1">
        <div className="skills">
          <h3 className="title">Expertise</h3>
          <ul className="skills_list description">
            <li>JavaScript</li>
            <li>PHP & Wordpress</li>
            <li>HTML CSS</li>
            <li>React JS</li>
            <li>MERN STACK</li>
          </ul>
        </div>

        <div className="ref">
          <h3 className="title">Reference</h3>
          <div className="ref_item">
            <h4 className="ref_name">Rashid Chy</h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, neque?</p>
          </div>
          <div className="ref_item">
            <h4 className="ref_name">Ayman Rahman</h4>
            <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
          </div>
        </div>

        <div className="edu">
          <h3 className="title">Education</h3>
          <div className="edu_item">
            <p className="item_preTitle">2012-2014</p>
            <h4 className="item_title">MSC in CSE</h4>
            <p className="item_subtitle">Chittagong University</p>
          </div>
          <div className="edu_item">
            <p className="item_preTitle">2008-2012</p>
            <h4 className="item_title">BSC in CSE</h4>
            <p className="item_subtitle">Chittagong University</p>
          </div>
        </div>

        <div className="certification">
          <h3 className="title">Certification</h3>
          <div className="certification_item">
            <p className="item_preTitle">2018</p>
            <h4 className="item_title">Frontend Developer</h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>

      <div className="group-2">
        <div className="exp">
          <h3 className="title">Experience</h3>
          <div className="exp_item">
            <p className="item_preTitle">2019 - present</p>
            <h4 className="item_title">Rashid Software LTD.</h4>
            <p className="item_subtitle">Frontend Developer</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
          <div className="exp_item">
            <p className="item_preTitle">2019 - present</p>
            <h4 className="item_title">Rashid Software LTD.</h4>
            <p className="item_subtitle">Frontend Developer</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>

        <div className="awards">
          <h3 className="title">Awards</h3>
          <div className="awards_item">
            <p className="item_preTitle">2019</p>
            <h4 className="item_title">Rashid Software LTD.</h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
          <div className="awards_item">
            <p className="item_preTitle">2019</p>
            <h4 className="item_title">Rashid Software LTD.</h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>

        <div className="interest">
          <h3 className="title">Interest</h3>
          <div className="interest_items">
            <div className="interest_item">
              <i data-feather="music"></i>
              <span>Music</span>
            </div>
            <div className="interest_item">
              <i data-feather="book"></i>
              <span>Books</span>
            </div>
            <div className="interest_item">
              <i data-feather="map"></i>
              <span>Travel</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="group-3">
        <div className="contact">
          <h3 className="title">Contact</h3>
          <div className="contact_info">
            <p className="description">Chittagong, Bangladesh</p>
            <p className="description">+880 ** *** ***</p>
            <p className="description">shaifarfan08@gmail.com</p>
          </div>
        </div>

        <div className="social">
          <h3 className="title">Socials</h3>
          <div className="social_items">
            <a href="#" target="_blank" className="social_item">
              <i data-feather="github"></i>
              <span>/shaifarfan</span>
            </a>
            <a href="#" target="_blank" className="social_item">
              <i data-feather="twitter"></i>
              <span>/shaifarfan08</span>
            </a>
            <a href="#" target="_blank" className="social_item">
              <i data-feather="linkedin"></i>
              <span>/shaifarfan08</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
