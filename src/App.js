import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import Route and Routes
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

        </Route>
      </Routes >

    </>
  )
}

export default App;
