import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Footer({ history, data }) {
	const [conter, setConter] = useState(1);
	const next = () => {
		console.log(conter);
		setConter(conter + 1);

		if (conter === i - 1) {
			setConter(conter);
		}
	};
	const precedent = () => {
		console.log(conter);
		setConter(conter - 1);
		if (conter === 0) {
			setConter(conter);
		}
	};
	return (
		<div>
			<div className="button page">
				<button onClick={() => precedent(history.push(`/${data.page}`))}> precedent </button>
				<span>{conter}</span>
				<button onClick={() => next(history.push(`/${data.page}`))}> next </button>
			</div>
			;
		</div>
	);
}

export default Footer;
