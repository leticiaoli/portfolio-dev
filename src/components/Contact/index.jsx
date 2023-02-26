import styles from "./Contact.module.css";
import ContainerFull from "../ContainerFull";
import ContactIcons from "../ContactIcons";

export default function Contact() {
  return (
    <ContainerFull background="#9B51E0" id="contactPage">
      <div className="containerCenter">
        <div className={styles.contentContact}>
          <h1 className={styles.titleContact}>Vamos conversar?</h1>
          <p className={styles.textContact}>
            Adoraria ouvir suas ideias para trabalharmos juntos. Você pode me
            contactar atraves do Linkedin, e-mail ou pelo meu whatsapp clicando
            nos icones abaixo:
          </p>
          <ContactIcons />
        </div>
      </div>
    </ContainerFull>
  );
}
