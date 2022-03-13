import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import EntryPage from './pages/EntryPage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';
import LiveMenu from './pages/LiveMenu';
import QRScanPage from "./pages/QrScanner";
import UploadImage from "./pages/UploadFoodImages";
const customHistory = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='feedback' element={<FeedbackPage/>} />
        <Route path='home' element={<HomePage/>}/>
        <Route path='qr-scan' element={<QRScanPage/>}/>
        <Route path='live-menu' element={<LiveMenu/>} />
        <Route path='upload-image' element={<UploadImage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
