import React from 'react';

function Subcomp({ result, history }) {
	return <div className="childCard" onClick={() => history.push(`/${result.movie_id}`)}></div>;
}

export default Subcomp;
