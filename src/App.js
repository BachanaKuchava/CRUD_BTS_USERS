import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/Home';
import Create from './assets/Create';
import Update from './assets/Update';
import Read from './assets/Read';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/create' element={<Create />}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/read/:id' element={<Read />}></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
