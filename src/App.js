import './App.css';
import Main from './components/Homepage/Main';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/About';
import ContactUs from './components/ContactUs/Contact';
import WomanSalon from './components/WomanSalon/WomanSalon';
import MenCategories from './components/MenCategories/MenCategories';
import WomenCategories from './components/WomenCategories/WomenCategories';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ManSalons from './components/ManSaloons/ManSalons';
import Cart from './components/Cart/Cart';
import JoinUs from './components/JoinUs/joinus';
import BookAppointment from './components/BookAppointment/BookAppointment';
import { BrowserRouter as Router,
  Route,Switch,Link } from 'react-router-dom';
import ScrolltoTop from './ScrolltoTop';
import SalonServices from './components/Salon_Owner/salon_services';
import SalonInfo from './components/Salon_Owner/salon_info';

function App() {
  return (
    <>
      {/* <div className='container'> */}
    {/* <Main /> */}
    {/* <BeautyCo /> */}
    <Router>
    {/* <Homepage /> */}
    <ScrolltoTop />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/mencategories' component={MenCategories} />
        <Route path='/womencategories' component={WomenCategories} />
        <Route path='/womansalon/:id' component={WomanSalon} />
        <Route path='/mansalons/:id' component={ManSalons} />
        <Route path='/Cart' component={Cart} />
        <Route path='/bookapp' component={BookAppointment} />
        <Route path='/joinus' component={JoinUs} />
        <Route path='/salon_services' component={SalonServices} />
        <Route path='/salon_info' component={SalonInfo} />
       
       </Switch>
      </Router>
      {/* </div> */}
    </>
  );
}

export default App;
