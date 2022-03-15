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
import InspectionPage from "./pages/InspectionPage";
import Authenticate from "./components/authenticate";
import SuccessPage from "./pages/SuccessPage";
const customHistory = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='feedback' element={<FeedbackPage/>} />
        <Route path='home' element={<HomePage/>}/>
        <Route path='mess-pay' element={<Authenticate  position={[]}><MessPayPage/></Authenticate>}/>
        <Route path='success' element={<Authenticate  position={[]}><SuccessPage/></Authenticate>} />
        <Route path='live-menu' element={<Authenticate  position={[]}><LiveMenuPage/></Authenticate>} />
        <Route path='inspection' element={<Authenticate  position={['Mess Inspection Team Member']}><InspectionPage/></Authenticate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
