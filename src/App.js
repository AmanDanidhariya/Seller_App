import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/PageNotFound';
import SingleCard from './components/SingleCard';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/property/:id," element={<SingleCard/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
