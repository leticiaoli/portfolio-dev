import { useContext } from 'react' 
import { MenuContext } from '../../providers/menu';

import styles from "./ButtonMenu.module.css";

import { MenuOutline } from "@styled-icons/evaicons-outline";

export default function ButtonMenu() {

  const { setIsOpen } = useContext(MenuContext)

  return (

    <MenuOutline size="45" title="Icone Menu" onClick={() => setIsOpen(true)} className={styles.iconMenu}/>

  );
}
