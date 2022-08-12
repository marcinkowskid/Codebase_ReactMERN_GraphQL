import { ApolloProvider, ApolloClient } from '@apollo/client';
import cache from './config/cache';

// Components
import Header from './components/Header/Header';
import Clients from './components/Clients/Clients';
import AddClientModal from './components/AddClientModal/AddClientModal';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className='container'>
        <AddClientModal />
        <Clients />
      </div>
    </ApolloProvider>
  );
};

export default App;
