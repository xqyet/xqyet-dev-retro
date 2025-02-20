import React from 'react';
import styled from 'styled-components';

// Styled link for project titles
const ProjectLink = styled.a`
  color: blue;
  text-decoration: underline;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

function Projects({ content }) {
    const { projects } = content;

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project, idx) => (
                <div key={idx}>
                    <ProjectLink href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        {project.title}
                    </ProjectLink>
                    <p>{project.description}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Projects;
