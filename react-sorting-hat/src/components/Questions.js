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
                }
            ],
            completed: false
        }
    }

    getQuestion = () => {
        const questionId = this.props.match.params.id;
        const getQuestion = this.state.questions.find(question => `${question.id}` === questionId);
        return getQuestion;
    }

    getIndex = (currentQuestion) => {
        return this.state.questions.findIndex(question => question.id === currentQuestion.id)
    }

    changeAnswer = (userAnswer) => {
        const index = this.getIndex(this.getQuestion());
        const questionChange = {...this.state};
        questionChange.questions[index].finalAnswer = userAnswer;
        this.setState(questionChange);
    }

    renderQuestion = () => {
        return <QuestionForm currentQuestion={this.getQuestion} answerQuestion={this.changeAnswer} />
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