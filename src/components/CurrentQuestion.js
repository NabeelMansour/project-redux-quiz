import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	console.log(question);

	// const now = (
	// 	question.id
	// 	 / 5) * 100;
	// 	  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

	const dispatch = useDispatch();
	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
		if (question.correctAnswerIndex === index) {
			alert('Correct answer');
			dispatch(quiz.actions.goToNextQuestion());
		} else {
			alert('WRONG!!!');
			dispatch(quiz.actions.goToNextQuestion());
		}
	};
	console.log(questions.answers);

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	return (
		<div>
			<h1>Question: {question.questionText}</h1>
			{question.options.map((item, index) => {
				return (
					<button key={item} onClick={() => onAnswerSubmit(question.id, index)}>
						{item}
					</button>
				);
			})}
			<p>{question.id}/5</p>
		</div>
	);
};
