import React, { useState } from "react";
import Navbar from '../Components/Navbar'
import marble from '../marble.JPG'
import jobops from '../JobOps.gif'
import premium from '../premium.gif'
import './Business.css'



export default function business() {
    return (
      <div >
          <Navbar/>
          <div style={{ float:"left",display:"flex"}}>
          <div className='total' style={{ width:"80%", height:'100vh',textAlign:"center", background: "linear-gradient(to bottom, #e1e4e6, #1d415e)", color:"white",paddingBottom:"20px"}}>
           <div style={{ textAlign:"center"}}>
              <h1 style={{color:"white"}}> Career Guidance</h1>
              <h1 style={{color:"white" ,fontWeight:"1800",fontFamily :'cursive'}}>What to expect from
  career counselling session</h1>
              <p style={{width:"90%",marginLeft:"5%", fontFamily :'cursive'}}>Career counselors work along with their clients in a systematic pattern. They determine the individual's strengths, weaknesses, learning patterns and their interests. Usually, tools like fingerprint testing, Aptitude test,IQ or Interest tests are used to understand the individual. Based on the reports the counselor then works along with the individual to find for a potential career choice. From helping choose the right board, course, college to choosing the right job, the counselor guides the individual in mapping the entire pathway to the desired goal.</p>
              <div style={{textAlign:"center",width:"100%",alignItems:"center",display:"flex",justifyContent:"center"}}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CJsqajmsWrk?autoplay=1" title="Career Guidance" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='but'  style={{background:'#1d415e',border:'solid ', textAlign:"center",width:"100%",alignItems:"center",display:"flex",justifyContent:"center", marginTop:'15px', width:'20%', marginLeft:'40%', borderRadius:'20', cursor:'pointer'}} >
              <h2 style={{color:'white'}}>Book an Appointment</h2>
              </div>
          </div>
          </div>
           <div className="column-box" >
                   
                   <img src={jobops} alt="Poster 2" /> 
                   <img src={premium} alt="Poster 2" /> 
                  
          </div>
          <div>
          </div>
          </div>
      </div>
    )
  }
  