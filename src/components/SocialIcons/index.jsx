import styles from "./SocialIcons.module.css";

import { Github } from "@styled-icons/evaicons-solid";
import { LogoLinkedin } from "@styled-icons/ionicons-solid";
import { WhatsappSquare } from "@styled-icons/fa-brands";
import { Email } from "@styled-icons/material-rounded";

export default function SocialIcons() {
  return (
    <div className={styles.iconsList}>
      <a href="https://github.com/leticiaoli" target="_blank" rel="noreferrer">
        <Github size="32" title="Icon Github" className={styles.icons} />
      </a>
      <a
        href="https://www.linkedin.com/in/let%C3%ADcia-oliveira-75254b174/"
        target="_blank"
        rel="noreferrer"
      >
        <LogoLinkedin
          size="32"
          title="Icon Linkedin"
          className={styles.icons}
        />
      </a>
      <a
        href="https://wa.me/5511988306777?text=Olá%20Letícia,%20Tudo%20bem?"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsappSquare
          size="32"
          title="Icon Whatsapp"
          className={styles.icons}
        />
      </a>
      <a
        href="mailto:lesilvaoliveira03@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Email size="40" title="Icon Email" className={styles.icons} />
      </a>
    </div>
  );
}
