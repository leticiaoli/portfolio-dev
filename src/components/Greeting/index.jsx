import ContainerFull from "../ContainerFull";
import SocialIcons from "../SocialIcons";
import Logo from "../Logo";

import styles from "./Greeting.module.css";

export default function Greeting() {
  return (
    <ContainerFull background="#F2C94C" id="greetingPage">
      <div className="containerCenter">
        <div className={styles.greentingBox}>
          <div className={styles.greentingList}>
            <p className={styles.greentingText}>Olá, sou a</p>
            <h1 className={styles.greentingTitle}>Letícia Oliveira</h1>
            <p className={styles.greentingText}>Front-end Developer Jr.</p>
            <SocialIcons />
          </div>
          <Logo />
        </div>
      </div>
    </ContainerFull>
  );
}
