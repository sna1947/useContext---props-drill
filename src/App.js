import { createContext } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
export const RingContext = createContext()

function App() {
  const ornaments = 'Necless'
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
        <GrandFather house='10000kkkkk' />
      </div>
    </RingContext.Provider>

  );
}

export default App;
