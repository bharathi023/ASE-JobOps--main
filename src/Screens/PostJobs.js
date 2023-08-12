import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import './PostJobs.css'
import post from '../post.png'
import jobs from '../jobs.svg'
import {db} from '../Firebase'
import { collection, addDoc} from "firebase/firestore"; 
export default function PostJobs() {
    
    const [jobdetails,setJobdetails]=useState()
    
    const handleChange=(e)=>{
        e.persist()
        setJobdetails({...jobdetails,[e.target.name]:e.target.value})
    }
    const job=async gd=>{
        const time = Date.now()
        try {
  const docRef = await addDoc(collection(db, "jobsposted"), {
    ...jobdetails,
    bookmark:0,
     postedOn:new Intl.DateTimeFormat('en-US',{year:"numeric",month:"long",day:"2-digit"}).format(time)
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }
    console.log(jobdetails)
  return (
    <div className='whole2'>
    <Navbar/>
    <div className='postjobsdiv'>
    <div className='jobposter'>
            <img src={jobs} alt="jobs" className='jobsimg'/>
        </div>
    <div className='postform'>
   
       <form className='postform1' style={{marginTop:"130px",display:"grid",gap:"40px"}} >
     
        <h2 style={{color:"#1d415e", fontFamily:'cursive', fontSize:25}}>Post a Job</h2>
            <input type="text" placeholder='Role' name="role" className='inputfield' onChange={(e)=>handleChange(e)}/>
            <input type="text" placeholder='Company Name' name="companyname" className='inputfield' onChange={(e)=>handleChange(e)}/>
            <select className='inputfield' name='Jobtype' onChange={(e)=>handleChange(e)} > 
                <option>Select Type of job</option>
                <option key="Itindustry">It Industry</option>
                <option key="Servicejobs">Service Jobs</option>
                <option key="Gigs">Gigs</option>
            </select>
            <input type="number" placeholder='Pay Per Hour' name="pay" className='inputfield' onChange={(e)=>handleChange(e)}/>
            <input type="number" placeholder='No of hours per week' name="noofhours" className='inputfield' onChange={(e)=>handleChange(e)}/>
            <input type="text" placeholder='Location' name="location" className='inputfield' onChange={(e)=>handleChange(e)}/>
            
            <h2 onClick={job} className="submitbutton">Submit</h2>
            </form>
            
        </div>
        
        </div>
    </div>
  )
}
