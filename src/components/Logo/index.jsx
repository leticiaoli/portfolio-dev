import Image from "next/image"

import styles from "./Logo.module.css"


export default function Logo () {
    return (
      <div className={styles.logoBox} >

        <Image 
          src="/foguete.png" 
          alt="Imagem de um foguete" 
          layout="responsive" 
          width={300}
          height={300}
          className={styles.logoImg}
        />
      </div>
    )
  }