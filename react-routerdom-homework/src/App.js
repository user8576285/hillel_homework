import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';
import PageNotFound from './components/pages/PageNotFound';



function App() {
  return (
    <div className="App">
      <nav className='nav'>
      <NavLink to='/posts'>Posts</NavLink>
      
      </nav>
      
      <Routes>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
