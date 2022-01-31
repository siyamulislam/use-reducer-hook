
import './App.css';
import PatientManagement from './components/ReducerCount/PatientManagement/PatientManagement';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
     <ReducerCount></ReducerCount>
     <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
