import { useLocation } from "react-router-dom";
import { Message } from "../layout/Message";
import { Container } from "../layout/Container";
import styles from "./Projects.module.css";
import { LinkButton } from "../layout/LinkButton";
import { ProjectCard } from "../project/ProjectCard";
import { useState, useEffect } from "react";
import { Loading } from "../layout/Loading";


export function Projects() {
  const [projects, SetProjects] = useState([]);
  const [removeLoading,SetRemoveLoading] = useState(false)
  const [projectMessage,setProjectMessage] = useState('')

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetProjects(data);
        SetRemoveLoading(true)
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json'
    },

  }).then((resp) => resp.json())
  .then(() => {
    SetProjects(projects.filter((project) => project.id !== id))
    setProjectMessage('Projeto Removido com Sucesso !')
  })
  .catch(err => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => <ProjectCard 
          name={project.name}
          id={project.id}
          budget={project.budget}
          category={project.category.name}
          key={project.id}
          handleRemove={removeProject}
          />)}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados !</p>
          )}
      </Container>
    </div>
  );
}
