import React from 'react';
import QuestionForm from './QuestionForm';
import { Route } from 'react-router-dom';

class Questions extends React.Component{
    constructor(){
        super();
        this.state = {
            questions: [
                {
                    question: 'Question 1',
                    id: 1,
                    options: [
                        {
                            option: 'I answer Gryffindor',
                            answerValue: 'Gryffindor'
                        },
                        {
                            option: 'I answer Slytherin',
                            answerValue: 'Slytherin'
                        },
                        {
                            option: 'I answer Ravenclaw',
                            answerValue: 'Ravenclaw'
                        },
                        {
                            option: 'I answer Hufflepuff',
                            answerValue: 'Hufflepuff'
                        },
                    ],
                    finalAnswer: ''
                },
                {
                    question: 'Question 2',
                    id: 2,
                    options: [
                        {
                            option: 'I answer Gryffindor',
                            answerValue: 'Gryffindor'
                        },
                        {
                            option: 'I answer Slytherin',
                            answerValue: 'Slytherin'
                        },
                        {
                            option: 'I answer Ravenclaw',
                            answerValue: 'Ravenclaw'
                        },
                        {
                            option: 'I answer Hufflepuff',
                            answerValue: 'Hufflepuff'
                        },
                    ],
                    finalAnswer: ''
                }
            ],
            completed: false
        }
    }

    answeredAll = () => {
        let completed = true;
        this.state.questions.forEach(question => {
            if(question.finalAnswer === '')
                completed = false;
        })
        if(completed){
            this.setState({...this.state, completed: true})
            this.props.history.push('/results');
        } else{
            this.props.history.push(`/question/${Number(this.props.match.params.id) + 1}`)
        }
    }

    getQuestion = () => {
        
        const questionId = this.props.match.params.id;
        const question = this.state.questions.find(question => `${question.id}` === questionId);
        console.log('QUESTION: ', question);
        return question;
    }

    getIndex = (currentQuestion) => {
        return this.state.questions.findIndex(question => question.id === currentQuestion.id)
    }

    changeAnswer = (userAnswer) => {
        const index = this.getIndex(this.getQuestion());
        const questionChange = {...this.state};
        questionChange.questions[index].finalAnswer = userAnswer;
        this.setState(questionChange);
        this.answeredAll();
    }

    renderQuestion = () => {
        return <QuestionForm {...this.props} 
                             currentQuestion={this.getQuestion} 
                             answerQuestion={this.changeAnswer} />
    }

    render(){
        return(
            <div>
                {this.renderQuestion()}
            </div>
        )
    }

}

export default Questions;