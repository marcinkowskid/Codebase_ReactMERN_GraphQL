// gql
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../gql/queries/project';

// Components
import Loading from '../Loading/Loading';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <Loading />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
};

export default Projects;
