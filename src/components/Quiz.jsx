import { useState, useCallback } from "react";
import QUESTIONS from '../questions';
import Question from "./Question";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz(){
    

    const [userAnswers, setUserAnswers] =useState([]);
    
    const activeQuestionIndex =userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length; 
    
    

    const handleSelectAnswer = useCallback (
      function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return[...prevUserAnswers, selectedAnswer]
        });
    },
    []);


    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer] 
    );

    if (quizIsComplete){
        return <div id="summary">
            <img src= {quizCompleteImg} alt="Quiz is Cpmpleted" />
            <h2> Quiz is Completed</h2>
        </div>
    }
    
     return(
        <div id="quiz">
            <Question
                key = {activeQuestionIndex}
                index ={activeQuestionIndex}
                onSkipAnswer ={handleSkipAnswer}
                onSelectAnswer ={handleSelectAnswer}
               
                
            
            />
        </div>
        
        

        
    );
}
