import Image from "next/image";
import styles from "./Avatar.module.css";

export default function Avatar() {
  return (
    <div className={styles.avatarImg}>
      <Image
        src="/avatar-le.png"
        alt="figura do avatar da Leticia Oliveira"
        layout="responsive"
        width={405}
        height={619}
      />
    </div>
  );
}
