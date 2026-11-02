import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}