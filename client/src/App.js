import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import cache from './config/cache';

// Components
import Header from './components/Header/Header';
// Pages
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Project from './pages/Project/Project';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
