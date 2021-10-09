import { Route } from 'react-router';
import Chat from './components/Chat';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/:id" component={Chat} />
      </Layout>
    </div>
  );
}

export default App;
