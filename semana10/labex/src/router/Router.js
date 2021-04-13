import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import ListtripPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

 const Router = () => {
    return (
        <>
           <BrowserRouter>
<Switch>
  <Route exact path = "/">
      <HomePage/>
  </Route>
  <Route exact path = "/trips/list">
      <ListtripPage/>
    </Route>
    <Route exact path = "/trips/application">
        <ApplicationFormPage/>
    </Route>
    <Route exact path = "/login">
    <LoginPage/>
    </Route>
    <Route exact path = "/admin/trips/list">
    <AdminHomePage/>
    </Route>
    <Route exact path = "/admin/trips/create">
     <TripDetailsPage/>
    </Route>
    <Route exact path = "/admin/trips/:id">
     <CreateTripPage/>
    </Route>


</Switch>

</BrowserRouter> 
        </>
  
    )
    

} 
export default Router