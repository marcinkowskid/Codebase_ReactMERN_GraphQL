import { FaUser } from 'react-icons/fa';

// Components
import AddClientForm from '../AddClientForm/AddClientForm';

const AddClientModal = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'>
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <span>Add Client</span>
        </div>
      </button>
      <div className='modal fade' id='addClientModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Add Client</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <AddClientForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientModal;
