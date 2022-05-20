import './App.css';
import { Tododisplay } from './components/tododisplay';
import { Inputlist } from './components/todoinput';

function App() {
  return (
    <div className="container">
        <Inputlist/>
        <Tododisplay/>
    </div>
  );
}

export default App;
