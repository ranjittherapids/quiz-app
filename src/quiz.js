import "bootstrap/dist/css/bootstrap.min.css";
import { question_collection } from "./fakedata";
import "./quiz.css";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
function Quiz() {
  const [question,setquestion]  = useState(1);
  const [answer,setanswer] = useState([])
  const [correctanswer,setcorrectanswer] = useState(0)
  const [timer,settimer] = useState(0);
      
   
//     setInterval(() => {
//         settimer(pre=>pre+1)
//   },1000)
  
  useEffect(()=>{
      setInterval(() => {
        settimer(pre=>pre+1)
      }, 1000);
  },[])
  useEffect(()=>{
      if(timer==30){
        settimer(0)
        setquestion(pre=>pre+1)
      }
  },[timer])
   
  return (
    <div className="border border-danger">
      <div class="container mt-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-10 col-lg-10">
            <div class="border">
              <div class="question bg-white p-3 border-bottom">
                <div class="d-flex flex-row justify-content-between align-items-center mcq">
                  <h4>MCQ Quiz</h4>
                  <span>{question>question_collection.length?"":timer}</span>
                  <span>{question}/{question_collection.length}</span>
                </div>
              </div>
              {question_collection.map((data, index) => {
                 if(question<=question_collection.length && question==(index+1)){
                 return <div key={index} class="question bg-white p-3 border-bottom">
                  <div class="d-flex flex-row align-items-center question-title">
                    <h3 class="text-danger">Q.{index+1}</h3>
                    <h5 class="mt-1 ml-2">
                      {data.question}
                    </h5>
                  </div>
                  {
                    data.answers.map((answerdata,index)=>{
                      return <div key={index} class="ans ml-2">
                      <label class="radio">
                        <input onClick={()=>{
                          if(data.correct==answerdata){
                            setcorrectanswer(pre=>pre+1)
                            setanswer([...answer,data.questionId])
                          }
                          settimer(0)
                          console.log(answer,'wwww')
                         // setanswer(pre=>[...pre,{id:data.questionId,answers:answerdata}])
                          setquestion(pre=>pre+1)
                        }}   name='same'   />
                        <span>{ answerdata}</span>
                      </label>
                    </div>
                    })
                  }  
                </div>
                 }
                 else{
                  return <h1>
                      
                   </h1>
                 }
                
              })}

              
                {
                question<question_collection.length?<></>:<div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                <h1>congratulation man </h1>
                <h1 className="mx-auto">{correctanswer}/{question_collection.length}</h1>
                 <p>show answer</p> 
                </div>
                     
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
