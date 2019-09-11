import React from 'react';

class QuestionForm extends React.Component{
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    handleClick = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.answerQuestion(this.state.value);
    }

    render(){
        return(
            <div>
                <h1>{this.props.currentQuestion().question}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.currentQuestion().options.map((option, index) => {
                        return(<label key={index}>
                                 {option.option}
                                 <input type='radio' name='choices' value={option.answerValue} onClick={this.handleClick} />
                               </label>)
                    })}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default QuestionForm;