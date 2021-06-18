import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Subcomp from './Components/Subcomp.js';
import Footer from './Components/Footer.js';
//const { Content, Sider, Footer } = Layout;
//const { Search } = Input;
//import { Router, Switch } from 'react-router-dom';
import { Row, Card, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
const Principale = () => {
	const [data, setdata] = useState();
	//const [words, setwords] = useState();

	const history = useHistory();

	async function getData() {
		let { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=43b746b767edc8522cb6200aa1821bcb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page={page}`
		);
		console.log(data);
		setdata(data.results);
	}
	useEffect(() => {
		getData();
	}, []);
	//src="https://image.tmdb.org/t/p/w500/"
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'raw' }} className="Navbar">
				<Input style={{ width: '100px', marginBottom: '3rem' }} placeholder="Basic usage" />
				<Button style={{ marginLeft: '70rem', marginRight: '50px' }} type="primary">
					Primary Button
				</Button>
				<Button type="dashed">Primary Button</Button>
			</div>
			{data &&
				data.map((result, index) => {
					return (
						<ul
							style={{
								flexDirection: 'column',
								flexWrap: 'wrap',
								alignContent: 'flex-start',
							}}
						>
							<Row wrap="true" gutter={[1, 8]} justify="start">
								<div>
									<Card
										className="site-card-border-less-wrapper"
										bordered={true}
										style={{
											height: 400,
											width: 300,
											borderRadius: '5px',
										}}
									>
										<img
											style={{
												borderRadius: '5px',
											}}
											height="330"
											width="300"
											src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
											alt="k"
										/>
										<p
											style={{
												fontSize: '15px',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											{result.original_title}
										</p>
										<p
											style={{
												fontSize: '15px',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										></p>
									</Card>
								</div>
							</Row>
							<Subcomp history={history} result={result} />
						</ul>
					);
				})}
			<div>
				<Footer history={history} data={data} />
			</div>
		</div>
	);
};
export default Principale;
