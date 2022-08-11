// GQL
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../../gql/mutations/client';
import { GET_CLIENTS } from '../../gql/queries/client';

// Icons
import { FaTrash } from 'react-icons/fa';

const ClientRow = ({ client }) => {
  const { id, name, email, phone } = client;

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id },
    // One method to refetch the data after the mutation
    // refetchQueries: [{ query: GET_CLIENTS }],
    // Another method to refetch the data after the mutation
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
