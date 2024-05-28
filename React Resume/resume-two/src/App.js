import React from 'react';
import './App.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from @fortawesome/react-fontawesome
import { faPhone, faEnvelope, faGlobe, faMapMarkerAlt, faCheck, faLanguage } from '@fortawesome/free-solid-svg-icons'; // Import icons from @fortawesome/free-solid-svg-icons

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="header">
                <h1>Jonathan Patterson</h1>
                <h2>Graphic Designer</h2>
            </div>
            <hr />
            <div className="main-content">
                <div className="left-column">
                    <div className="section skills">
                        <h3>Contact</h3>
                        <p><FontAwesomeIcon icon={faPhone} /> 123-456-7890</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> hello@example.com</p>
                        <p><FontAwesomeIcon icon={faGlobe} /> www.example.com</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Anywhere St., Any City</p>
                    </div>
                    <div className="section skills">
                        <h3>Skills</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} /> Skill name here</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Your Skill</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Special skills</li>
                            <li><FontAwesomeIcon icon={faCheck} /> List your skills</li>
                        </ul>
                    </div>
                    <div className="section education">
                        <h3>Education</h3>
                        <div className="degree">
                            <h4>Your Degree Name</h4>
                            <p>Your Institution Name</p>
                            <p>2016-2018</p>
                        </div>
                        <div className="degree">
                            <h4>Your Degree Name</h4>
                            <p>Your Institution Name</p>
                            <p>2016-2018</p>
                        </div>
                        {/* Add more degrees as needed */}
                    </div>
                    <div className="section languages">
                        <h3>Languages</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faLanguage} /> English</li>
                            <li><FontAwesomeIcon icon={faLanguage} /> German</li>
                            <li><FontAwesomeIcon icon={faLanguage} /> Spanish</li>
                        </ul>
                    </div>
                </div>
                <div className="right-column">
                    <div className="section education">
                        <h3>Profile</h3>
                        <div className="degree">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit hic quidem accusamus natus illum nostrum exercitationem nisi ad error, quisquam inventore optio fuga consequuntur rem voluptatum enim corporis in, quo magni nobis. Explicabo, ea animi eaque laborum dolores architecto voluptatibus accusantium iste odio harum iusto temporibus eligendi. Reprehenderit, ipsum.</p>
                        </div>
                        {/* Add more degrees as needed */}
                    </div>
                    <div className="section experience">
                        <h3>Work Experience</h3>
                        <div className="job">
                            <h4>Your Job Position here</h4>
                            <p>Company name</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus quasi, a veritatis nemo, excepturi quam voluptatum ea, nobis aperiam at nostrum dolorum quisquam? Dolorum in repellendus nam adipisci reiciendis quis ratione, aut praesentium quasi accusamus quod ex dignissimos? Modi voluptatibus nostrum repudiandae inventore fuga adipisci eligendi nisi assumenda quasi.</p>
                            <p>2020-2022</p>
                        </div>
                        <div className="job">
                            <h4>Your Job Position here</h4>
                            <p>Company name</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt veritatis eius eum placeat ut, autem voluptas sequi cumque animi atque non, doloribus accusantium quasi dolores illum dolorum quo modi sunt et quae fugit saepe? Unde, excepturi perferendis necessitatibus fuga quam a provident, aliquam inventore ipsa nemo sint eveniet tenetur facilis?</p>
                            <p>2020-2022</p>
                        </div>
                        {/* Add more jobs as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
