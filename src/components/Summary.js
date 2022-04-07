import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const Summary = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const answerCorrect = answers.filter((item) => item.isCorrect);
    const dispatch = useDispatch()


	return (
		<>
			<p>
				Points count: {answerCorrect.length}/{answers.length}
			</p>
            <button onClick={() => dispatch(quiz.actions.restart())}>
                Play again
            </button>
		</>
	);
};