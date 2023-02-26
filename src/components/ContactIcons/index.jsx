import styles from "./ContactIcons.module.css";

import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";
import { LinkedinBox } from "@styled-icons/remix-line/LinkedinBox";
import { Email } from "@styled-icons/material-outlined/Email";

export default function ContactIcons() {
  return (
    <div className={styles.iconsBox}>
      <a
        className={styles.boxIcon}
        href="https://www.linkedin.com/in/let%C3%ADcia-oliveira-75254b174/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinBox title="Icone logo Linkedin" className={styles.icon} />
      </a>
      <a
        className={styles.boxIcon}
        href="mailto:lesilvaoliveira03@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Email title="Icone email" className={styles.icon} />
      </a>
      <a
        className={styles.boxIcon}
        href="https://wa.me/5511988306777?text=Olá%20Letícia,%20Tudo%20bem?"
        target="_blank"
        rel="noreferrer"
      >
        <Whatsapp title="Icone logo whatsapp" className={styles.icon} />
      </a>
    </div>
  );
}
