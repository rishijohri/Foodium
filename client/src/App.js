import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import React, {useEffect} from 'react';
import { createBrowserHistory } from "history";
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';

import FeedbackPage from './messPages/FeedbackPage';
import LiveMenuPage from './messPages/LiveMenuPage';
import MessPayPage from "./messPages/MessPayPage";
import InspectionPage from "./messPages/InspectionPage";
import Hashcomp from "./components/hashcomp"
import Authenticate from "./components/authenticate";
import SuccessPage from "./messPages/SuccessPage";
import MessHome from "./messPages/MessHome";
import LiveReviewPage from "./messPages/LiveReviewPage";
import PaymentHistoryPage from "./messPages/PaymentHistoryPage";

import VendorHomePage from "./messVendorPages/VendorHomePage";
import ChangePinPage from './messVendorPages/ChangePinPage';
import ChangePricePage from './messVendorPages/ChangePricePage';
import ChangeMenuPage from "./messVendorPages/ChangeMenuPage";

import CanteenHomePage from "./canteenPages/canteenHomePage";
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
        <Route path='mess' element={<Authenticate position={[]}><Hashcomp><Outlet/></Hashcomp></Authenticate>}>
            <Route path='home' element={<Authenticate position={[]}>
              <Hashcomp>
                <MessHome/>
              </Hashcomp>
            </Authenticate>}/>
            <Route path='feedback' element={(<Authenticate  position={[]}>
                                              <Hashcomp>
                                                <FeedbackPage/>
                                              </Hashcomp>
                                            </Authenticate>)} />
            <Route path='mess-pay' element={<Authenticate  position={[]}>
          <Hashcomp>
            <MessPayPage/>
          </Hashcomp>
        
        
        </Authenticate>}/>
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
        <Route path='payment-history' element={<Authenticate position={[]}>
                <Hashcomp>
                  <PaymentHistoryPage/>
                </Hashcomp>
              </Authenticate>} />
        
        <Route path='success' element={<Authenticate  position={[]}>
                                          <Hashcomp>
                                            <SuccessPage/>
                                          </Hashcomp>
                                        </Authenticate>} />                          
            <Route path="*" element={
                (<main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>)
              }
            />
        </Route>
        <Route path='canteen' element={<Authenticate position={[]}><Hashcomp><Outlet/></Hashcomp></Authenticate>}>
          <Route path='home' element={<Authenticate position={[]}>
                <Hashcomp>
                  <CanteenHomePage/>
                </Hashcomp>
              </Authenticate>}/>
          </Route>
        <Route path='mess-vendor' element={<Authenticate position={[]}><Hashcomp><Outlet/></Hashcomp></Authenticate>}>
              <Route path='home' element={<Authenticate position={[]}>
                                            <Hashcomp>
                                              <VendorHomePage/>
                                            </Hashcomp>
                                          </Authenticate>}/>
              <Route path='change-pin' element={<Authenticate  position={[]}>
                                                  <Hashcomp>
                                                    <ChangePinPage position={''}/>
                                                  </Hashcomp>
                                                </Authenticate>}/>
              <Route path='change-price' element={<Authenticate  position={[]}>
                                                  <Hashcomp>
                                                    <ChangePricePage position={''}/>
                                                  </Hashcomp>
                                                </Authenticate>}/>
              <Route path='change-menu' element={<Authenticate  position={[]}>
                                                  <Hashcomp>
                                                    <ChangeMenuPage position={''}/>
                                                  </Hashcomp>
                                                </Authenticate>}/>
              <Route path="*" element={<main style={{ padding: "1rem" }}>
                                          <p>There's nothing here in Mess Vendors!</p>
                                        </main>}/>
        </Route>
        <Route path='home' element={<Authenticate  position={[]}>
                                      <Hashcomp>
                                        <HomePage position={''}/>
                                      </Hashcomp>
                                    </Authenticate>}/>
      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here At All!</p>
        </main>
      }
    />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
