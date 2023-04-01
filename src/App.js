import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div classNameName="App">
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />
          <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
          >
            <TodoList />

          </div>

          <hr className="mt-4" />


        </div>
      </div>
    </div>
  );
}

export default App;
