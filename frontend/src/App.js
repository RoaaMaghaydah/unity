import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import SignUp from "./components/auth/signUp/index";
import AddActivities from "./components/Activities/addActivities";
import AddTravelPlans from "./components/travel_Plans/index";
import AddPerferences from "./components/preferences/addPreferences";
import GetAllActivities from "./components/Activities/getAllActivities";
import Navigation from "./components/navigation";
import GetAllTravel from "./components/travel_Plans/getAllTravel";
import ContactUs from "./components/contactUs";
import GetTravelById from "./components/travel_Plans/getTravelById";
import Footer from "./components/footer";
import GetActivityById from "./components/Activities/getActivityById";
import Profile from "./components/profile";
import CountryList from "./components/Api/CountryList";
import Album from "./components/Album/Album";
import ImageGrid from "./components/Album/showAlbum";
import Modal from "./components/Album/Modal";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => {
    return {
      photo: state.photo.photo
    };
  });
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/login" render={() => <Login />} />

      <Route exact path="/register" render={() => <SignUp />} />
      <Route exact path="/contactUs" render={() => <ContactUs />} />
      <Route exact path="/plans" component={GetAllTravel} />
      <Route exact path="/travelPlans/:id" component={GetTravelById} />
      <Route exact path="/activities" component={GetAllActivities} />
      <Route
        exact
        path="/activities/activity/:id"
        component={GetActivityById}
      />
      <Route exact path="/profile" render={() => <Profile />} />

      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <AddActivities/> */}
      {/* <AddTravelPlans /> */}
      {/* <AddPerferences /> */}
      {/* <Activities /> */}
      {/* <GetAllTravel /> */}
      {/* <CountryList /> */}
      <Album />
      <ImageGrid />
     {state.photo&& <Modal />}
      <Footer />
    </div>
  );
};

export default App;
