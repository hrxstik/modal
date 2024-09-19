import './App.css';
import Overlay from './components/Overlay';
import React from 'react';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="App flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white font-bold py-4 px-6 rounded hover:bg-blue-700 transition duration-300 text-xl"
        onClick={() => setIsOpen(true)}>
        Начать взлом
      </button>
      {/* {isOpen && <Overlay setIsOpen={setIsOpen} />} */}
      <Overlay setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
