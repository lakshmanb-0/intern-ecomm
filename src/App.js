import Main from './Pages/Main';
import Checkout from './Pages/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thank from './Pages/Thank';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thank' element={<Thank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
