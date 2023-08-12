import { addDoc, collection, doc, onSnapshot, updateDoc, increment as incrementDoc,} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { db , auth} from '../Firebase'
import './BusinessReview.css'
import { onAuthStateChanged } from 'firebase/auth'
export default function Businessreview() {
    const [idea,setIdea]=useState()
    const [answer3,setAnswer3]=useState()
    const [ideafetch,setIdeafetch]=useState()
    const [liked,setLiked]=useState([])
    const [ideaAnswerfetch,setIdeaAnswerfetch]=useState()
    const [id3,setId3]=useState()
    const [id4,setId4]=useState()
    const [likestotal,setLikestotal]=useState()
    const [dislikestotal,setDislikestotal]=useState()
    const [percent,setPercent]=useState()
    console.log(answer3)
    console.log(id3)
    const post3=async gd3=>{
        try {
  const docRef = await addDoc(collection(db, "BusinessIdea"), {
    idea,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }

    const postanswer1=async gd4=>{
        try {
  const docRef1 = await addDoc(collection(db, "BusinessAnswers"), {
    answer3,
    id3:id3
  });
  console.log("Document written with ID: ", docRef1.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }


    useEffect(() => {
      search()
        search2()
      
    }, [])
    


    const search=()=>{
           
            
                 const newjobs=onSnapshot(collection(db, 'BusinessIdea'), (snapshot) =>{
    setIdeafetch(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    });
    console.log(ideafetch)
            
        }
        const search2=()=>{
           
            
                 const newjobs1=onSnapshot(collection(db, 'BusinessAnswers'), (snapshot) =>{
    setIdeaAnswerfetch(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    });
    console.log(ideaAnswerfetch)
            
        }

        const Prediction=()=>{
          var total = likestotal + dislikestotal
          var p = (likestotal/total) * 100
          setPercent(p)
        }
       
  var [user, setUser] = useState();
  const [id,setId]=useState()
  console.log(liked)
  const likes=() =>{
  onAuthStateChanged(auth, (user) => {
     setUser(user.uid)
     if(liked.includes(id)){
         console.log("already liked")
     } else {
         
         setLiked([...liked,id])
      updateDoc(doc(db,'BusinessIdea' ,id),{
      likes:incrementDoc( 1)

    } ).then(response => {
      console.log("updated")
      
    }).catch(error =>{
      console.log(error.message)
    })
     }
         
 })}
 const dislikes=() =>{
  onAuthStateChanged(auth, (user) => {
     setUser(user.uid)
     if(liked.includes(id)){
         console.log("already disliked")
     } else {
         setLiked([...liked,id])
      updateDoc(doc(db,'BusinessIdea' ,id),{
      dislikes:incrementDoc( 1)
    } ).then(response => {
      console.log("updated")
    }).catch(error =>{
      console.log(error.message)
    })
     }
     
 })}
        

  return (
    <div className='whole'>
        <Navbar/>
        <div >
        <div className='questionbox'>
            <input type="text" placeholder='Type your Business Idea' className='search' onChange={(e)=>setIdea(e.target.value)}/>
            <h2 className='button1' onClick={()=>post3()}> Post </h2>
        </div>
        </div>
        <div className='answerdiv '  >
        
            {ideafetch && ideafetch.map((val,index)=>{
            return(
                <div className='answerbox' style={{background: 'white',border:"1px  ", borderRadius:20, margin: "2% 0"}}>
                <h2 className='question'><span style={{color:"grey"}}>Q :</span> {val.idea}</h2>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <div >
                    <p style={{color:"grey"}}>poll:</p>
                </div>
                <p>{val.likes}</p>
                <p onClick={()=>{setId(val.id);likes()}} className="poll" >yes</p>
                 <p>{val.dislikes}</p>
                <p onClick={()=>{setId(val.id);dislikes()}} className="poll" >no</p>
               
                </div>
                <p style={{border:"1px solid ",padding:5,fontSize:13,width:"fit-content",background:"#1d415e",color:"white",borderRadius:10,cursor:"pointer"}} onClick={()=>{setLikestotal(val.likes);setDislikestotal(val.dislikes);setId4(val.id);Prediction()}}> Predict your success rate</p>
                {id4 && id4 == val.id ? (<p>your success percentage is <span style={{color:"blue"}}>{percent}%</span>  </p>):""}
                {ideaAnswerfetch && ideaAnswerfetch.map((ans)=>{
                    return(
                        val.idea === ans.id3?(
                            <div style={{display:"block"}}>
                            <h2 style={{fontSize:"14px",color:"black"}} ><span style={{color:"grey"}}>Ans :</span> {ans.answer3}</h2>
                            </div>
                        ):""
                    )
                     
                })}
                <div className='answerbox1'>
                <h2 className='question'>Ans :</h2>
                <input type="text" onChange={(e)=>setAnswer3(e.target.value)} className="answer" style={{border: 'solid black 0.3px', borderRadius:'9px'}} placeholder='Type your answer ' /> 
                <h2 className='submit' style={{border:"1px solid ",padding:5,fontSize:13,width:"fit-content",background:"#1d415e",color:"white",borderRadius:10,cursor:"pointer"}} onClick={(e)=>{setId3(val.idea);postanswer1()}} > Submit </h2>
                </div>
            </div>
            )
        })}
        </div>
        <Footer/>
    </div>
  )
}
