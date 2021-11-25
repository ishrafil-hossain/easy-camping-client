import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyBooking from './Pages/MyBooking/MyBooking';
import Footer from './Pages/Footer/Footer';
import AddOffer from './Pages/AddOffer/AddOffer';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import FindFile from './Pages/allFile/FindFile';
import File from './Pages/allFile/FindFile';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* home  */}
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/find-file'>
              <FindFile></FindFile>
            </PrivateRoute>

            {/* my booking for private  */}
            <PrivateRoute path='/my-booking'>
              <MyBooking></MyBooking>
            </PrivateRoute>

            {/* login  */}
            <Route path='/login'>
              <Login></Login>
            </Route>

            {/* single offer booking  */}
            <PrivateRoute path='/booking/:bookingId'>
              <Booking></Booking>
            </PrivateRoute>

            <Route path='/single-file/:singleFileId'>
              <File></File>
            </Route>

            {/* add offer  */}
            <Route path='/add-offer'>
              <AddOffer></AddOffer>
            </Route>

            {/* Manage Booking  */}
            <Route path='/manage-booking'>
              <ManageBooking></ManageBooking>
            </Route>

            {/* not found  */}
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
