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
import MessHome from "./pages/MessHome";
import LiveReviewPage from "./pages/LiveReviewPage";
import PaymentHistoryPage from "./pages/PaymentHistoryPage";

const customHistory = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='feedback' element={<FeedbackPage/>} />
        <Route path='home' element={<Authenticate  position={[]}><HomePage/></Authenticate>}/>
        <Route path='mess-pay' element={<Authenticate  position={[]}><MessPayPage/></Authenticate>}/>
        <Route path='success' element={<Authenticate  position={[]}><SuccessPage/></Authenticate>} />
        <Route path='live-menu' element={<Authenticate  position={[]}><LiveMenuPage/></Authenticate>} />
        <Route path='live-review' element={<Authenticate  position={[]}><LiveReviewPage/></Authenticate>} />
        <Route path='inspection' element={<Authenticate  position={['Mess Inspection Team Member', 'Student']}><InspectionPage/></Authenticate>} />
        <Route path='mess-home' element={<Authenticate position={[]}><MessHome/></Authenticate>} />
        <Route path='payment-history' element={<Authenticate position={[]}><PaymentHistoryPage/></Authenticate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
