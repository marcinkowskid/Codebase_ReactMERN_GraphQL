import { FaList } from 'react-icons/fa';

// Components
import AddProjectForm from '../AddProjectForm/AddProjectForm';

const AddProjectModal = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addProjectModal'>
        <div className='d-flex align-items-center'>
          <FaList className='icon' />
          <span>Add Project</span>
        </div>
      </button>
      <div className='modal fade' id='addProjectModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Add Project</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <AddProjectForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectModal;
