import './App.css';
import Index from './components';
import { generateRandomGraph } from './utils/initialisegraph';

function App() {
  const graph = generateRandomGraph(4);
  console.log(graph);
  return (
    <Index />
  );
}

export default App;
