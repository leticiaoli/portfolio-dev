import styles from "./SkillsIcons.module.css";

import { Js } from "@styled-icons/fa-brands";
import { Html5 } from "@styled-icons/fa-brands";
import { Css3Alt } from "@styled-icons/fa-brands";
import { ReactLogo } from "@styled-icons/fa-brands";
import { Gulp } from "@styled-icons/fa-brands";

import { Sass } from "@styled-icons/simple-icons";
import { Nextdotjs } from "@styled-icons/simple-icons";

import { Github } from "@styled-icons/evaicons-solid";

import { Jquery } from "@styled-icons/simple-icons";

export default function SkillsIcons() {
  return (
    <div className={styles.boxIcons}>
      <Js size="25" title="Icone logo JavaScript" className={styles.iconJs} />
      <Html5 size="25" title="Icone logo HML5" className={styles.iconHtml} />
      <Css3Alt size="25" title="Icone logo CSS3" className={styles.iconCss} />
      <Sass size="25" title="Icone logo Sass" className={styles.iconSass} />
      <ReactLogo size="25" title="Icone logo React" className={styles.iconReact} />
      <Nextdotjs size="25" title="Icone logo Nextjs" className={styles.iconNext} />
      <Gulp size="25" title="Icone logo Gulp" className={styles.iconGulp} />
      <Jquery size="25" title="Icone logo Jquery" className={styles.iconJquery} />
      <Github size="25" title="Icone logo Github" className={styles.iconGithub} />
    </div>
  );
}
