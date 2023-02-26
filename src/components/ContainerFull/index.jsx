import styles from "./ContainerFull.module.css";

export default function ContainerFull({background, children, id}) {
  const css = {
    background: background,
  }

  return (
    <div style={css} className={styles.ContainerFull} id={id}>
      {children}
    </div>
  )
}
