import ContainerFull from "../ContainerFull";
import Avatar from "../Avatar";
import Skills from "../Skills";

import styles from "./About.module.css";

export default function About() {
  return (
    <ContainerFull background="#AA2FBA" id="aboutPage">
      <div className="containerCenter">
        <div className={styles.aboutBox}>
          <Avatar />
          <div className={styles.aboutDescription}>
            <h2 className={styles.aboutTitle}>Quem sou?</h2>
            <p className={styles.aboutText}>
              Prazer, me chamo Leticia Oliveira. Sou desenvolvedora
              Front-end.Tenho como objetivo de criar experiencias fantasticas
              através de interfaces de alta performance com as melhores
              tecnologias do mercado. Venho estudando os melhores frameworks
              JavaScript afim de atingir ótimos resultados de performance, boas
              práticas, acessibilidade e de SEO.
            </p>
            <Skills />
          </div>
        </div>
      </div>
    </ContainerFull>
  );
}
