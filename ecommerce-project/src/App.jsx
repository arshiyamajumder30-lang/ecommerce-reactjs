import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage' //use HomePage() here


import './App.css'

function App() {

  return (
    //inside <App> add <Routes> component 
//path="/" -> index
<Routes>
<Route path="/" element={<HomePage />}></Route>
<Route path="checkout" element={<div>checkout pg</div>}></Route>
</Routes>
//displays HomePage on going to the given url path
  );
}

export default App
