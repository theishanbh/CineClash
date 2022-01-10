import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import Search from "./pages/Search/Search";
import Comparison from "./pages/Comparison/Comparison";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Trending from "./pages/Trending/Trending";
import Watched from "./pages/Watched/Watched";
import CreateSession from "./pages/CreateSession/CreateSession";


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Topbar></Topbar>
          <Routes>
            <Route path='/' element={<Search/>} />
            <Route path='/comparison' element={<Comparison/>} />
            <Route path='/trending' element={<Trending/>} />
            <Route path='/watched' element={<Watched/>} />
            <Route path='/createsession' element={<CreateSession/>} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
