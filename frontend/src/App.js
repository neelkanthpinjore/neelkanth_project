import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import NavBar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import AdminAuth from './screens/AdminAuth'
import AdminScreen from './screens/AdminScreen'
import ProductAddScreen from './screens/ProductAddScreen'
import DeleteScreen from './screens/DeleteScreen'
import ChangePassword from './screens/ChangePassword'
import ViewProduct from './screens/ViewProduct'
import Footer from './components/Footer'
import ContactScreen from './screens/ContactScreen'

function App() {
  return (
   <Router>
     <NavBar/>
     <main >
     <Container>    
     <Route path='/products/:category' component={Productscreen} exact/>
     <Route path='/login' component={AdminAuth} exact/>
     <Route path='/adminScreen' component={AdminScreen} exact/>
     <Route path='/addProd' component={ProductAddScreen} exact/>
     <Route path='/deleteProd/:category' component={DeleteScreen} exact/>
     <Route path='/changePass' component={ChangePassword} exact/>
     <Route path='/viewProd/:id' component={ViewProduct} exact/>
     <Route path='/contact' component={ContactScreen} exact/>
     <Route path='/' component={Homescreen} exact/>
     </Container>
     </main>
      <Footer text="Copyright &copy; NEELKANTH"></Footer>
   </Router>
  );
}

export default App;
