import Home from './pages/Home';
import Info from './pages/Info';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
    const [progress, setProgress] = useState(0);
    return (
        <>
       <LoadingBar 
          color='red'
          progress={progress}
          height={4}
          onLoaderFinished={() => setProgress(0)}
          />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home setProgress={setProgress}/>}/>
        <Route exact path="/info/:id" element={<Info setProgress={setProgress}/>}/>
        </Routes>
        </>
    );
}

export default App;
