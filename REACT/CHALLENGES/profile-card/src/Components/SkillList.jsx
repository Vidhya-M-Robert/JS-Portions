import Skill from "./Skill"
export default function SkillList(){
    const skills = [
  {
    skill: "Luxury",
    level: "excellent",
    color: "#2662EA"
  },
  {
    skill: "Performance",
    level: "excellent",
    color: "#C3DCAF"
  },
  {
    skill: "Sporty",
    level: "nice",
    color: "#E84F33"
  },
   {
    skill: "Premium",
    level: "good",
    color: "#EFD81D"
  },
  {
    skill: "Innovation",
    level: "good",
    color: "#60DAFB"
  },
  {
    skill: "Electric",
    level: "nice",
    color: "#FF3B00"
  }
];

    return(
        <div className="skill-list">
           {skills.map((skill)=> (
            <Skill skill = {skill.skill} color={skill.color} level={skill.level} />
           ))}
        </div>
    );
} 