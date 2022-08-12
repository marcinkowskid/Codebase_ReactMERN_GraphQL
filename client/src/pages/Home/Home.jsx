import Clients from '../../components/Clients/Clients';
import AddClientModal from '../../components/AddClientModal/AddClientModal';
import AddProjectModal from '../../components/AddProjectModal/AddProjectModal';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
