import styles from "./Skills.module.css";

import SkillsIcons from "../../components/SkillsIcons";

export default function Skills() {
  return (
    <>
      <span className={styles.skillsTitle}>Minhas Skills:</span>

      <SkillsIcons />
    </>
  );
}
