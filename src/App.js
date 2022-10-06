import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:id' element={<PostDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
