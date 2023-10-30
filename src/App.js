import { MantineProvider } from '@mantine/core';
import HomeSizePage from './components/HomeSizePage';
import Home from './components/Home';
import HandSizePage from './components/Handsizepge'; // Import HandSizePage
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{height:'100vh'}} >  <MantineProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collar" element={<HomeSizePage />} />
            <Route path="/hand" element={<HandSizePage />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
    </div>
  );
}

export default App;
