import React, { useState } from 'react';
import "./qualification.css";


const Qualification = () => {

    const[toggleState,setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    };


  return (
    <section className="qualification  section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">"Unveiling My Odyssey: Crafting a Personal Journey"</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={  toggleState === 1 ?"qualification__button1 qualification__active button--flex" :
        "qualification__button1 qualification__active button--flex"
        }
        onClick={()=> toggleTab(1)}
        
        >
            <i className="uil uil-graduation-cap 
            qualification__icon"></i>
            Education
          </div>

          <div className={  toggleState === 2 ?"qualification__button qualification__active button--flex" :
        "qualification__button qualification__active button--flex"
        }
        onClick={()=> toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt
             qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={ toggleState === 1 
                ?"qualification__content qualification__content-active"
                :"qualification__content "}>
            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">Bachlours in Computer Science</h3>
                <span className="qualification__subtitle">SOA University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    </i> 2020 - Present (7.04 GPA)
                </div>
              </div>
              <div>
                <span className="qualification__rounder">

                </span>
                <span className="qualification__line">
                    
                </span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Elite Public School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    </i> 2018 - 64%
                </div>
              </div>
              
            </div>
            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">Chegaundham High School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    </i> 2018 - 65%
                </div>
              </div>
              <div>
                <span className="qualification__rounder">

                </span>
                <span className="qualification__line">
                    
                </span>
              </div>
            </div>
            
            
                
             
         

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Qualification;
