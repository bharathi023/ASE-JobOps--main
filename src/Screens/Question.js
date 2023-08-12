import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { db } from '../Firebase'

import './Question.css'
export default function Question() {
    const [answerfetch,setAnswerfetch]=useState()
    const [questionfetch,setQuestionfetch]=useState()
    const [question,setQuestion]=useState()
    const [answer,setAnswer]=useState()
    const [id2,setId2]=useState()
    console.log(question)
    const post=async gd=>{
        try {
  const docRef = await addDoc(collection(db, "Questions"), {
    question,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }

    const postanswer=async gd1=>{
        try {
  const docRef1 = await addDoc(collection(db, "Answers"), {
    answer,
    id1:id2
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
           
            
                 const newjobs=onSnapshot(collection(db, 'Questions'), (snapshot) =>{
    setQuestionfetch(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    });
    console.log(questionfetch)
            
        }
        const search2=()=>{
           
            
                 const newjobs1=onSnapshot(collection(db, 'Answers'), (snapshot) =>{
    setAnswerfetch(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    });
    console.log(answerfetch)
            
        }
    
  return (
    <div className='whole2'>
        <Navbar/>
        <div>
        <div className='questionbox'>
            <input type="text" placeholder='Type your question' className='search' onChange={(e)=>setQuestion(e.target.value)}/>
            <h2 className='button1' onClick={()=>post()}> Post </h2>
        </div>
        </div>
        <div className='answerdiv'>
        {questionfetch && questionfetch.map((val,index)=>{
            return(
                <div className='answerbox' style={{background: 'white',border:"1px  ", borderRadius:20, margin: "2% 0"}}>
                <h2 className='question'>Q : {val.question}</h2>
                {answerfetch && answerfetch.map((ans)=>{
                    return(
                        val.question === ans.id1?(
                            <div style={{display:"block"}}>
                            <h2 style={{fontSize:"16px",color:"black"}} ><span style={{color:"grey"}}>Ans :</span> {ans.answer}</h2>
                            </div>
                        ):""
                    )
                     
                })}
                <div className='answerbox1' >
                <h2 className='question'  onClick={()=>search2}>Ans :</h2>
                <input type="text" onChange={(e)=>setAnswer(e.target.value)} className="answer" style={{border: 'solid black 0.3px', borderRadius:'9px'}}  placeholder='Type your answer ' /> 
                <h2 className='submit' style={{border:"1px solid ",padding:5,fontSize:13,width:"fit-content",background:"#1d415e",color:"white",borderRadius:10,cursor:"pointer"}} onClick={(e)=>{setId2(val.question);postanswer()}} > Submit </h2>
                </div>
            </div>
            )
        })}
            
        </div>
    </div>
  )
}
