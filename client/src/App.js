import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, {useEffect} from 'react';
import { createBrowserHistory } from "history";
import EntryPage from './pages/EntryPage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';
import LiveMenuPage from './pages/LiveMenuPage';
import MessPayPage from "./pages/MessPayPage";
import InspectionPage from "./pages/InspectionPage";
import Hashcomp from "./components/hashcomp"
import Authenticate from "./components/authenticate";
import SuccessPage from "./pages/SuccessPage";
import MessHome from "./pages/MessHome";
import LiveReviewPage from "./pages/LiveReviewPage";
import PaymentHistoryPage from "./pages/PaymentHistoryPage";
var bcrypt = require('bcryptjs');

const customHistory = createBrowserHistory();
function App() {
  let hash = '000000'
  function gettoken() {
    var salt = bcrypt.genSaltSync(10);
    hash = bcrypt.hashSync("B4c0/\/", salt);
    window.localStorage.setItem('hash', hash)
  }
  useEffect(()=> {
    gettoken()
  }, [])
  return (
    <BrowserRouter history={customHistory}>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='feedback' element={(<Authenticate  position={[]}>
                                          <Hashcomp>
                                            <FeedbackPage/>
                                          </Hashcomp>
                                        </Authenticate>)} />
        <Route path='home' element={<Authenticate  position={[]}>
                                      <Hashcomp>
                                        <HomePage/>
                                      </Hashcomp>
                                    </Authenticate>}/>
        <Route path='mess-pay' element={<Authenticate  position={[]}>
                                          <Hashcomp>
                                            <MessPayPage/>
                                          </Hashcomp>
                                        </Authenticate>}/>
        <Route path='success' element={<Authenticate  position={[]}>
                                          <Hashcomp>
                                            <SuccessPage/>
                                          </Hashcomp>
                                        </Authenticate>} />
        <Route path='live-menu' element={<Authenticate  position={[]}>
                                            <Hashcomp>
                                              <LiveMenuPage/>
                                            </Hashcomp>
                                          </Authenticate>} />
        <Route path='live-review' element={<Authenticate  position={[]}>
                                              <Hashcomp>
                                                <LiveReviewPage/>
                                              </Hashcomp>
                                            </Authenticate>} />
        <Route path='inspection' element={<Authenticate  position={['Mess Inspection Team Member', 'Student']}>
                                              <Hashcomp>
                                                <InspectionPage/>
                                              </Hashcomp>
                                            </Authenticate>} />
        <Route path='mess-home' element={<Authenticate position={[]}>
                                            <Hashcomp>
                                              <MessHome/>
                                            </Hashcomp>
                                          </Authenticate>} />
        <Route path='payment-history' element={<Authenticate position={[]}>
                                                  <Hashcomp>
                                                    <PaymentHistoryPage/>
                                                  </Hashcomp>
                                                </Authenticate>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
