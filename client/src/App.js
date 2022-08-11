import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Components
import Header from './components/Header/Header';
import Clients from './components/Clients/Clients';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className='container'>
        <Clients />
      </div>
    </ApolloProvider>
  );
};

export default App;
