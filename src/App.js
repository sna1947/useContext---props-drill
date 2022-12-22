import { createContext } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
export const RingContext = createContext()

function App() {

  const house = '05'
  const ornaments = 'Necless'
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <GrandFather house={house} />
      </div>
    </RingContext.Provider>

  );
}

export default App;
