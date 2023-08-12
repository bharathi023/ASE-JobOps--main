import { collection, doc, onSnapshot, updateDoc,increment as incrementDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { db } from '../Firebase';

import bookmark3 from '../icons8-bookmark-outline-48.png'
import bookmark2 from '../icons8-filled-bookmark-ribbon-64.png'
import Bookmarks from './Bookmarks';
import './ServiceJobs.css'
export default function Gigs() {
    const [jobdetails1,setJobdetails1]=useState()
   const [job,setJob]=useState()

   const [bookmark1,setBookmark1]=useState()
   const [bookmark,setBookmark]=useState([])
   console.log(job)
        const search=()=>{
           
            
                 const newjobs=onSnapshot(collection(db, 'jobsposted'), (snapshot) =>{
    setJobdetails1(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    });
    console.log(jobdetails1)
            
        }
        const Book=()=>{
           updateDoc(doc(db,'jobsposted' ,bookmark1),{
      bookmark:1

    }
   
                ).then(response => {
      console.log("updated")
      
    }).catch(error =>{
      console.log(error.message)
    })

                
           
        }
        const Book1=()=>{
           updateDoc(doc(db,'jobsposted' ,bookmark1),{
      bookmark:0

    }
   
                ).then(response => {
      console.log("updated")
      
    }).catch(error =>{
      console.log(error.message)
    })

                
           
        }
       useEffect(() => {
      search()
      
    }, [])
    
  return (
    <div className='whole2'>
    <Navbar/>
    <div>
        <div  className="searchbox">
            <input type="text" placeholder='Search for jobs  eg: role, location, company' className='search' onChange={(e)=>setJob(e.target.value)}/>
            <h2 className='button1' onClick={search}  > Search </h2>
        </div>
        <div>
        
        
        </div>
    </div>

    <div className="main">
    {job?(
        jobdetails1 && jobdetails1.map((data)=>{
        
        return(
            data.role.toLowerCase() === job.toLowerCase() || data.companyname.toLowerCase() === job.toLowerCase() || data.location.toLowerCase() === job.toLowerCase()  && data.Jobtype.toLowerCase()=== "Gigs"?(
                <div className='jobbox'>
    <div style={{display:"block",gap:"20px"}}> 
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}>
            <h4 className='jobtextspan'>Role:</h4>
            <h4 className='jobtext'>{data.role}</h4>
        </div>
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}>
            <h4 className='jobtextspan'>company:</h4>
            <h4 className='jobtext'>{data.companyname}</h4>
        </div>
        </div>
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}> 
        <div style={{display:"flex",gap:"5px",borderRight:"1px solid #EEEEEE",paddingRight:"10px"}}>
            <h4 className='jobtextspan'> Hours per week:</h4>
            <h4 className='jobtext'>{data.noofhours}</h4>
        </div>
        <div style={{display:"flex",gap:"5px"}}>
            <h4 className='jobtextspan'>Hourly Pay:</h4>
            <h4 className='jobtext'>{data.pay}</h4>
        </div>
        </div>
        
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}>
            <h4 className='jobtextspan'>Location:</h4>
            <h4 className='jobtext'>{data.location}</h4>
        
        </div>
        <div>
            <h2 className='button'>View</h2>
        </div>
        <div className='bookmark'>
        <div >
            <h2 className='jobtextspan'>Posted on: {data.postedOn}</h2>
            </div>
            <div>
             {data.bookmark !== 0?(
                <img src={bookmark2} alt="bookmark" className='bookmarkimg' onClick={()=>{setBookmark1(data.id);Book1()}}/>
            ):(
                <img src={bookmark3} alt="bookmark" className='bookmarkimg' onClick={()=>{setBookmark1(data.id);Book()}}/>
            )}
                
            </div>
        </div>
    </div>
            ):""
            

     ) })
    ):(
        jobdetails1 && jobdetails1.map((data)=>{
        
        return(
            data.Jobtype=== "Gigs"?(
                <div className='jobbox'>
    <div style={{display:"block",gap:"20px"}}> 
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}>
            <h4 className='jobtextspan'>Role:</h4>
            <h4 className='jobtext'>{data.role}</h4>
        </div>
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}>
            <h4 className='jobtextspan'>company:</h4>
            <h4 className='jobtext'>{data.companyname}</h4>
        </div>
        </div>
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}> 
        <div style={{display:"flex",gap:"5px",borderRight:"1px solid #EEEEEE",paddingRight:"10px"}}>
            <h4 className='jobtextspan'> Hours per week:</h4>
            <h4 className='jobtext'>{data.noofhours}</h4>
        </div>
        <div style={{display:"flex",gap:"5px"}}>
            <h4 className='jobtextspan'>Hourly Pay:</h4>
            <h4 className='jobtext'>{data.pay}</h4>
        </div>
        </div>
        
        <div style={{display:"flex",gap:"5px",border:"1px solid #EEEEEE",borderRadius:"5px"}}>
            <h4 className='jobtextspan'>Location:</h4>
            <h4 className='jobtext'>{data.location}</h4>
        
        </div>
        <div>
            <h2 className='button'>View</h2>
        </div>
       <div className='bookmark'>
        <div >
            <h2 className='jobtextspan'>Posted on: {data.postedOn}</h2>
            </div>
            <div>
             {data.bookmark !== 0?(
                <img src={bookmark2} alt="bookmark" className='bookmarkimg'  onClick={()=>{setBookmark1(data.id);Book1()}}/>
            ):(
                <img src={bookmark3} alt="bookmark" className='bookmarkimg' onClick={()=>{setBookmark1(data.id);Book()}}/>
            )}
                
            </div>
        </div>
    </div>
            ):""
                
            

     ) })
    )}
    

        </div>
    </div>
  )
}
