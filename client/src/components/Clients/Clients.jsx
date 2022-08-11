import { useQuery } from '@apollo/client';

// Queries
import { GET_CLIENTS } from '../../queries/clientQueries';

// Components
import ClientRow from '../ClientRow/ClientRow';
import Loading from '../Loading/Loading';

const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) return <Loading />;

  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
