import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import EntryPage from './pages/EntryPage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';
import LiveMenuPage from './pages/LiveMenuPage';
import MessPayPage from "./pages/MessPayPage";
import UploadImage from "./pages/UploadFoodImages";
import Authenticate from "./components/authenticate";
const customHistory = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='feedback' element={<FeedbackPage/>} />
        <Route path='home' element={<HomePage/>}/>
        <Route path='mess-pay' element={<MessPayPage/>}/>
        <Route path='live-menu' element={<LiveMenuPage/>} />
        <Route path='upload-image' element={<Authenticate  position={["Student"]}><UploadImage/></Authenticate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
