
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Screens/Home";
import Login from './Screens/Login';
import PostJobs from "./Screens/PostJobs";
import Register from "./Screens/Register";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../src/Firebase";
import Searchjobs from "./Screens/Searchjobs";
import Question from "./Screens/Question";
import Businessreview from "./Screens/Businessreview";
import Itjobs from './Screens/Itjobs'
import Gigs from './Screens/Gigs'
import Servicejobs from './Screens/ServiceJobs'
import Bookmarks from "./Screens/Bookmarks";
import Franchise from "./Screens/Franchise";
import Resume from './Screens/Resume';
import Business from './Screens/Business';
import Carrerguidance from "./Screens/Carrerguidance";
function App() {
  const [authUser, setAuthUser] = useState(null);

  
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        
      } else {
        setAuthUser(null);
      }
    });

    
  return (
    <BrowserRouter>
      
      {authUser?(
        <Routes>
         <Route path="/" element={<Home/>} />
        <Route path="Postjobs" element={<PostJobs/>} />
        <Route path="Searchjobs" element={<Searchjobs/>} />
        <Route path="PostaQuestion" element={<Question/>} />
        <Route path="Businessidea" element={<Businessreview/>} />
        <Route path="Itindustry" element={<Itjobs/>} />
        <Route path="Gigs" element={<Gigs/>} />
        <Route path="Servicejobs" element={<Servicejobs/>} />
        <Route path="Bookmarks" element={<Bookmarks/>} />
        <Route path="Carrerguidance" element={<Carrerguidance/>} />
        <Route path="Franchise" element={<Franchise/>} />
        <Route path="Resume" element={<Resume/>} />
        <Route path="Business" element={<Business/>} />

        </Routes>
      ):(
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="Register" element={<Register/>} />
          </Routes>
      )}
        
      
    </BrowserRouter>
  );
}

export default App;
