import { useState } from 'react';

// gql
import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../../gql/queries/client';
import { GET_PROJECTS } from '../../gql/queries/project';
import { ADD_PROJECT } from '../../gql/mutations/project';

const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('new');

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    addProject(name, description, clientId, status);

    setName('');
    setDescription('');
    setStatus('new');
    setClientId('');
  };

  // Get all clients for the select
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) return null;
  if (error) return <p>Something went wrong.</p>;

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input
          type='text'
          className='form-control'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Description</label>
        <textarea
          className='form-control'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Status</label>
        <select
          className='form-select'
          id='status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option value='new'>Not Started</option>
          <option value='progress'>In Progress</option>
          <option value='completed'>Completed</option>
        </select>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Client</label>
        <select
          className='form-select'
          id='clientId'
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}>
          <option value=''>Select Client</option>
          {data?.clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
        Submit
      </button>
    </form>
  );
};

export default AddProjectForm;
