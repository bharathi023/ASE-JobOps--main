import React from 'react'
import Navbar from '../Components/Navbar'
import './Resume.css'
import r1 from '../resumetemp.png'
import r2 from '../resumetemp2.png'
import r3 from '../resumetemp3.png'

export default function Resume() {
  return (
    <div style={{background:"linear-gradient(to bottom, #e1e4e6, #1d415e)"}} >
        <Navbar/>

        <div className='resume' style={{paddingLeft:"30px", marginLeft:"40px", marginRight:"40px",background:"white",marginTop: "70px",marginLeft:"40px", color:"black"}}>
           <h1>Resume & Cover Letter</h1>
           <h2>Writing and formatting tips to make your application stand out.</h2>
           <h1 style={{marginTop:"40px"}}>Popular Videos for Guidance</h1>
           <div style={{textAlign:"center",width:"100%",alignItems:"center",display:"flex",justifyContent:"center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Tt08KmFfIYQ?autoplay=1" title="Career Guidance" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pjqi_M3SPwY?autoplay=1" title="Career Guidance" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{marginLeft:"50px"}}></iframe>
            </div>
            <h1>What is a resume?</h1>

            <p>A resume is a brief document that summarizes you as a job candidate. Most resumes include these elements: 
            </p>
<h2>Educational history</h2>
<p>List your highest degrees and the ones most relevant to the position you’re applying for. If you’re seeking a job as a biochemist, you can list your post-secondary degrees like a master’s and Ph.D. If you are in high school or pursuing a degree, include when you started attending classes and your expected graduation date.
</p> 
<h2>Applicable skills</h2>
<p>This shows potential employers your abilities as they relate to the role. If you’re applying as an administrative assistant, for example, include your typing speed and mention that you’re adept at different word processing or data entry software.
</p>
<h2>Summary of qualifications</h2>
<p>This section should include any official certifications or workplace achievements. For instance, you can include that you’re a certified electrician or that you raised customer satisfaction levels by 28% in two years. Hiring managers and recruiters should be able to scan your summary of qualifications.
</p>
<h2>Professional memberships</h2>
<p>Include any clubs or associations that will help you in a potential role. For example, if you are interviewing for a job as a counselor in a hospital, you can list your membership in the American Psychological Association.
</p>

<h1> Let's Check Out few Resume Templates  </h1>
<img src={r1} alt="Career" style={{ margin: 60, height:'390px'}} />

<img src={r2} alt="Career" style={{ margin: 60, height:'390px'}} />

<img src={r3} alt="Career" style={{ margin: 60, height:'390px'}} />



</div>
        
    </div>
  )
}