import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';
function App() {
  return (
    <div className="App bg-black w-full h-screen flex flex-col relative items-center">
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px] '>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
