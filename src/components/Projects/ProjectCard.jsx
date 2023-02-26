import styles from "./ProjectsCard.module.css";
import Image from "next/image";

export default function ProjectsCard({ contentCard }) {
  const { projectName, projectDescription, linkProject, gallery } = contentCard
  console.log('gallery[0].url -> ', gallery[0].url)
  console.log('gallery[0].url -> ', gallery)

  return (
    <div className={styles.projectCard}>
      <Image
        src={gallery[0].url}
        alt={projectName}
        className={styles.projectImg}
        layout= 'fill'
      />

      <div className={styles.projectContent}>
        <h1 className={styles.projectTitle}> {projectName} </h1>

        <p className={styles.projectDescription}> {projectDescription} </p>

        <a
          href={linkProject}
          target="_blank"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
}
