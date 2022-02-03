import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import EntryPage from './pages/EntryPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';

const customHistory = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='sign-in' element={<SignInPage/>} />
        <Route path='sign-up' element={<SignUpPage/>} />
        <Route path='feedback' element={<FeedbackPage/>} />
        <Route path='home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
