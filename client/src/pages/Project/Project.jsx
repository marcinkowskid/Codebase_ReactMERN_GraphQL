import { Link, useParams } from 'react-router-dom';
// gql
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../gql/queries/project';
// Components
import Loading from '../../components/Loading/Loading';
import ClientInfo from '../../components/ClientInfo/ClientInfo';
import DeleteProjectButton from '../../components/DeleteProjectButton/DeleteProjectButton';

const Project = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className='mt3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>

          <ClientInfo client={data.project.client} />
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
