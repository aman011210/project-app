import React from 'react'
import "./skills.css"
import Backend from './Frontend';
import Frontend from './Backend';
const Skills = () => {
  return (
      <section className="skills section" id="skills">
<h2 className="section__title">Skills</h2>

<span className="section__subtitle">My Technical Skill</span>
<div className="skills__container container grid">
<Backend/>
<Frontend/>
</div>  
</section>
  );
}

export default Skills