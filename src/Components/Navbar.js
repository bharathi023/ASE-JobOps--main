import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import logout from '../icons8-logout-64.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";
import logo from '../Screenshot 2023-03-04 at 12.28.43 PM.png'
function Navbar() {
	const [open,setOpen]=useState(false)
    const [user,setUser]=useState()
    const [profile,setProfile]=useState(false)
    const [profile1,setProfile1]=useState(false)
    const navigate = useNavigate();
    const userSignOut = () => {
    signOut(auth)
    navigate("/")
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  const userdata=()=>{
     const user2= onAuthStateChanged(auth, (user) => {
          setUser(user.email)
      })
      
  }
  
  console.log(user)
	return (
		
			<nav className="navbar">
      <button  onClick={()=>setOpen(!open)} className="burger button5"></button>
      <div className="dropdowns">
      <div>
      <img src={logo} style={{height:"60px",width:"110px"}} />
      </div>
     
        <div className="dropdown" style={{marginLeft:"48rem"}}>
         <Link style={{textDecoration:"none",color:"white"}} to="/"> <button className="button5">
            Home
           
          </button></Link>
          
        </div>
        <div className="dropdown">
          <Link to="/Searchjobs" style={{textDecoration:"none"}}><button className="button5">
            Jobs
            
          </button></Link>
          <div className="dropdown-menu">
            <div>
              <Link to="/Itindustry" style={{textDecoration:"none"}}><button className="button5"> IT Industry</button></Link>
              <Link to="/Servicejobs" style={{textDecoration:"none"}}><button className="button5">Service Jobs</button></Link>
             <Link to="/Gigs" style={{textDecoration:"none"}}> <button className="button5">Gigs</button></Link>
             <Link to="/Postjobs" style={{textDecoration:"none"}}> <button className="button5">Post a Job</button></Link>
             <Link to="/PostaQuestion" style={{textDecoration:"none"}}> <button className="button5">Job Review</button></Link>
             <Link to="/Resume" style={{textDecoration:"none"}}> <button className="button5">Resume & Cover Letter</button></Link>

             <Link to="/Carrerguidance" style={{textDecoration:"none"}}> <button className="button5"> Career Guidance</button></Link>
            </div>
          </div>
        </div>
        <div className="dropdown">
        <Link to="/Business" style={{textDecoration:"none"}}><button className="button5">
            Business
            
          </button></Link>
          <div className="dropdown-menu">
            <div>
              <Link to="/Businessidea" style={{textDecoration:"none"}}><button className="button5">Start-Up Review</button></Link>
              <Link to="/Franchise" style={{textDecoration:"none"}}><button className="button5">Franchise Offers</button></Link>

            </div>
          </div>
        </div>
        <div className="dropdown">
          <Link style={{textDecoration:"none",color:"white"}}><button className="button5" onClick={()=>{userdata();setProfile(!profile)}}>
            Profile
            
          </button></Link>
        </div>
        <div className="dropdown">
            <img src={logout} style={{height:"30px"}} onClick={userSignOut}/>
        </div>
        </div>
      <div style={{display: open?"block":"none"}} className="down" >
      <div className="down1">
      <button className="button5" style={{float:"right",fontSize:"50px",marginRight:"20px"}} onClick={()=>setOpen(false)}>x</button>
          <Link style={{textDecoration:"none",color:"white"}} to="/"> <button className="button5" style={{marginTop:"0px",fontSize:"36px"}}>
            Home
           
          </button></Link>
          <button className="button5" style={{marginTop:"20px",fontSize:"36px"}}>
            Jobs
            
          </button>
           <Link to="/Itindustry" style={{textDecoration:"none",color:"white"}}><button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>IT Industry</button></Link>
              <Link to="/Servicejobs" style={{textDecoration:"none",color:"white"}}><button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Service Jobs</button></Link>
             <Link to="/Gigs" style={{textDecoration:"none",color:"white"}}> <button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Gigs</button></Link>
             <Link to="/Postjobs" style={{textDecoration:"none",color:"white"}}> <button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Post a Job</button></Link>
             <Link to="/Carrerguidance" style={{textDecoration:"none",color:"white"}}> <button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Career Guidance</button></Link>
             <button className="button5" style={{marginTop:"20px",fontSize:"36px"}}>
            Review
            
          </button>
              <Link to="/PostaQuestion" style={{textDecoration:"none",color:"white"}}> <button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Post a Question</button></Link>
              <Link to="/Businessidea" style={{textDecoration:"none",color:"white"}}><button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Start-Up Review</button></Link>
              <Link to="/Franchise" style={{textDecoration:"none",color:"white"}}> <button className="button5" style={{marginTop:"20px",fontSize:"16px",marginLeft:"20px"}}>Franchise</button></Link>

              <Link style={{textDecoration:"none",color:"white"}}><button className="button5" onClick={()=>{userdata();setProfile1(!profile1)}} style={{marginTop:"20px",fontSize:"36px"}}>
            Profile
            
          </button></Link>
          {profile1?(
          <div style={{backgroundColor:"white"}} >
              <div style={{backgroundColor:"white",padding:"200px",}}>
                  <button className="button5">Email: {user}</button>
                   <Link to="/Bookmarks" style={{textDecoration:"none",color:"white"}}><button className="button5" style={{marginTop:"20px",fontSize:"36px"}}>
            Bookmarks
          </button></Link>
              </div>

          </div>
      ):""}
               <img src={logout} style={{height:"30px",marginLeft:"20px"}} onClick={userSignOut}/>
            </div>
      </div>
      {profile?(
          <div style={{marginTop:"60px",marginLeft:"-15%"}}>
              <div style={{backgroundColor:"rgb(36, 35, 35)",padding:"20px",}}>
                  <p>Email:{user}</p>
                   <Link to="/Bookmarks" style={{textDecoration:"none",color:"white",}}><button className="button5" style={{marginTop:"20px",fontSize:"18px"}}>
            Bookmarks
          </button></Link>
              </div>
          </div>
      ):""}
      
    </nav>
	);
}

export default Navbar;