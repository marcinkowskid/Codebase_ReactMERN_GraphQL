const ProjectCard = ({ project }) => {
  const { id, name, status } = project;

  return (
    <div className='col-md-6'>
      <div className='card mb-3 box'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{name}</h5>
            <a href={`/projects/${id}`} className='btn btn-light'>
              View
            </a>
          </div>
          <p className='small mt-3'>
            Status: <strong>{status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
