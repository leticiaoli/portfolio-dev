import { useContext } from 'react' 
import { MenuContext } from '../../providers/menu';
import scroolPage from '../../utils/scroolPage'

import styles from "./WrapperMenu.module.css";

import { CloseOutline } from "@styled-icons/evaicons-outline";

export default function WrapperMenu() {

  const { isOpen, setIsOpen } = useContext(MenuContext)

  function linkMenu(id) {
    scroolPage(id)
    setIsOpen(false)
  }

  return (
    <>
      <div className={`containerFull ${!isOpen ? 'd-none' : ''} ${styles.WrapperMenu}`}>
        <div className="containerCenter">
          <button className={styles.btnCloseMenu}>
            <CloseOutline size="50" title="Icon close" onClick={() => setIsOpen(false)} className={styles.iconCloseMenu} />
          </button>

          <ul className= {styles.listMenu}>
            <li className={styles.listMenu__item}>
              <button className={styles.listMenu__text} onClick={() => {linkMenu('greetingPage')}}>Home</button>
            </li>
            <li className={styles.listMenu__item}>
              <button className={styles.listMenu__text} onClick={() => {linkMenu('aboutPage')}}>Quem sou?</button>
            </li>
            <li className={styles.listMenu__item}>
              <button className={styles.listMenu__text} onClick={() => {linkMenu('projectsPage')}}>Projetos</button>
            </li>
            <li className={styles.listMenu__item}>
              <button className={styles.listMenu__text} onClick={() => {linkMenu('contactPage')}}>Vamos conversar?</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
