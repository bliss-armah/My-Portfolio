import { skillsData } from "../utils/data";

const Skills = () => {
  
    return (
      <div>
        <section className="section skills">
          <div className="section-title">
            <h2>skills</h2>
            <div className="underline"></div>
          </div>
          <div className="section-center skills-center">
            {skillsData.map((skillData) => (
              <article key={skillData.id}>
                <h3>{skillData.title}</h3>
                {skillData.skills.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <p>{skill.name}</p>
                    <div className="skill-container">
                      <div className={`skill-value value-${skill.value}`}></div>
                      <p className={`skill-text skill-text-${skill.value}`}>
                        {skill.value}%
                      </p>
                    </div>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Skills;
  