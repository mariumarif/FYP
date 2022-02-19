import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminCategories from "./components/Admin/admin_categories";
import AdminWomenSalon from "./components/Admin/admin_women_sal";
import NewSalonRequest from "./components/Admin/new_salon_requests";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Cart from "./components/Cart/Cart";
import Homepage from "./components/Homepage/Homepage";
import JoinUs from "./components/JoinUs/joinus";
import Login from "./components/Login/Login";
import ManSalons from "./components/ManSaloons/ManSalons";
import MenCategories from "./components/MenCategories/MenCategories";
import SalonRoute from "./components/SalonRoute/SalonRoute";
import SalonInfo from "./components/Salon_Owner/salon_info";
import SalonOrders from "./components/Salon_Owner/salon_orders";
import SalonServices from "./components/Salon_Owner/salon_services";
import SignUp from "./components/SignUp/SignUp";
import WomanSalon from "./components/WomanSalon/WomanSalon";
import WomenCategories from "./components/WomenCategories/WomenCategories";
import ScrolltoTop from "./ScrolltoTop";

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
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/mencategories" component={MenCategories} />
          <Route path="/womencategories" component={WomenCategories} />
          <Route path="/womansalon/:id" component={WomanSalon} />
          <Route path="/mansalons/:id" component={WomanSalon} />
          <Route path="/Cart" component={Cart} />
          <Route path="/bookapp" component={BookAppointment} />
          <Route path="/joinus" component={JoinUs} />
          <SalonRoute path="/salon_services" component={SalonServices} />
          <SalonRoute path="/salon_info" component={SalonInfo} />
          <SalonRoute path="/salon_orders" component={SalonOrders} />
          <AdminRoute path="/admin_categories" component={AdminCategories} />
          <AdminRoute
            path="/admin_men_sal"
            component={(props) => <AdminWomenSalon {...props} category={1} />}
          />
          <AdminRoute
            path="/admin_women_sal"
            component={(props) => <AdminWomenSalon {...props} category={2} />}
          />
          <AdminRoute path="/new_salon_requests" component={NewSalonRequest} />
        </Switch>
      </Router>
      {/* </div> */}
    </>
  );
}

export default App;
