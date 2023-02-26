import styles from "./Projects.module.css"

import ProjectCard from "./ProjectCard"
import ContainerFull from "../ContainerFull"

export default function Projects({ projects }) {

  
  return (
    <ContainerFull background="#fff" id="projectsPage">
      <div className={`containerCenter ${styles.containerCenter_ProjectsPage}`}>
        <div >
          <p className={styles.titleProjects} >Algumas Pocs que desenvolvi afim de mostrar <br></br>meus conhecimentos</p>
        </div>

        <div className={styles.projectList}>
          {projects?.map((project) => {
            return (
            <ProjectCard contentCard={project} key={project?.id}/>
          )})}
        </div>
      </div>
    </ContainerFull>
  )
}