import { useState } from 'react';

// gql
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../../gql/mutations/client';
import { GET_CLIENTS } from '../../gql/queries/client';

const AddClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      return alert('Please fill in all fields');
    }

    addClient(name, email, phone);

    setName('');
    setEmail('');
    setPhone('');
  };

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
        <label className='form-label'>Email</label>
        <input
          type='email'
          className='form-control'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Phone</label>
        <input
          type='text'
          className='form-control'
          id='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='btn btn-secondary'
        data-bs-dismiss='modal'>
        Submit
      </button>
    </form>
  );
};

export default AddClientForm;
