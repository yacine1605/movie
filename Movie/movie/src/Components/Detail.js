import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Detaile = () => {
	const [data, setdata] = useState();
	const [theme, setTheme] = useState('white');
	const { movie_id } = useParams();
	const history = useHistory();
	const getData = async () => {
		const { data } = await axios
			.get(`https://api.themoviedb.org/3/${movie_id}/786?api_key=43b746b767edc8522cb6200aa1821bcb&language=en-US`)
			.catch((err) => console.log('Error', err));
		console.log(data);
		setdata(data);
	};

	useEffect(() => {
		getData(); 
	}, []);

	return (
		<div className={theme}>
			<div style={{ paddingLeft: '10px', marginBottom: '50px ' }} className="btn">
				<button onClick={() => setTheme(theme === 'white' ? 'black' : 'white')}> change theme </button>
				<button onClick={() => history.goBack()}>
					<i style={{ paddingRight: '15px' }} className="fas fa-arrow-left"></i>
					Back
				</button>
			</div>
			<button onClick={() => history.goBack()}></button>
			<div className="information">
				<ul>
					<li>
						genres:
						{data?.genres.map((el, id) => {
							return (
								<span key={el.id} style={{ paddingRight: '10px', paddingLeft: '5px' }}>
									{el.name}
								</span>
							);
						})}
					</li>
					<li>
						original_title:
						<span style={{ paddingRight: '10px', paddingLeft: '5px' }}>{data?.release_date}</span>
					</li>
					<li>
						status:<span style={{ paddingRight: '10px', paddingLeft: '5px' }}>{data?.status}</span>
					</li>
					<li>
						original_title:<span style={{ paddingRight: '10px', paddingLeft: '5px' }}></span>
					</li>
					<li>
						original_title: <span style={{ paddingRight: '10px', paddingLeft: '5px' }}></span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Detaile;
