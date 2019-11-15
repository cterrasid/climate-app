import React from 'react';

function Result({ result }) {
	//estraigo los valores que me interesan
	const { name, main } = result;

	if (!name) return null;

	//de Kelvin a Centígrados
	const kelvin = 273.15;

	return (
		<div className="card-panel white col s12">
			<div className="black-text">
				<h2>The {name}'s weather is:</h2>
				<p className="temperature">
					{parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
				</p>
				<p>Minimum temperature: {parseInt(main.temp_min - kelvin, 10)} &#x2103; </p>
				<p>Maximum temperature: {parseInt(main.temp_max - kelvin, 10)} &#x2103; </p>
			</div>
		</div>
	);
}

export default Result;
