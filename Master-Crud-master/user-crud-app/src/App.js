import Home from './components/home/Home';
import { ToastContainer } from 'react-toastify';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <ToastContainer />
     <Routing/>
    </div>
  );
}

export default App;
