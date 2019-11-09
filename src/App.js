import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';

function App() {
	//Estado principal de la app
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [error, setError] = useState(false);
	const [result, setResult] = useState({});

	useEffect(() => {
		//prevenir ejecución inicial
		if (city === '') return;

		const queryApi = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`;

			//consultar la url
			const response = await fetch(url);
			const result = await response.json();

			setResult(result);
		};

		queryApi();
	}, [city, country]);

	const queryData = data => {
		//Validar que ambos campos (city y country), existan
		if (data.city === '' || data.country === '') {
			//error
			setError(true);
			return;
		}

		//Si existen, agregarlos al estado
		setCity(data.city);
		setCountry(data.country);
		setError(false);
	};

	//Conditional rendering
	let component;
	if (error) {
		//Mostrar el error si existe
		component = <Error message="All the fields are mandatory" />;
	} else {
		//Mostrar el clima
		component = null;
	}

	return (
		<div className="App">
			<Header title="Climate App" />
			<div className="form-container">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Form queryData={queryData} />
						</div>
						<div className="col s12 m6">{component}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
