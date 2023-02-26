import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
query getProjects {
  projects(first: 10) {
    id
    projectName
    gallery {
      mimeType
      url(transformation: {})
      height
      width
    }
    projectDescription 
    linkProject
  }
}`
