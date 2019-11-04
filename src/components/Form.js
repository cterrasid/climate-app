import React, { useState } from 'react';

function Form({ queryData }) {
	//estado del componente
	const [search, setSearch] = useState({
		city: '',
		country: '',
	});

	const handleChange = e => {
		//cambiar el state
		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});
	};

	const queryWeather = e => {
		e.preventDefault();

		//pasar la búsqueda del usuario hacia el componente principal
		queryData(search);
	};

	return (
		<form onSubmit={queryWeather}>
			<div className="input-field col s12">
				<input type="text" name="city" id="city" onChange={handleChange} />
				<label htmlFor="city">City: </label>
			</div>
			<div className="input-field col s12">
				<select onChange={handleChange} name="country">
					<option value="">Select a country</option>
					<option value="VE">Venezuela</option>
					<option value="ES">Spain</option>
					<option value="CL">Chile</option>
					<option value="MX">Mexico</option>
					<option value="US">United States of America</option>
					<option value="CR">Costa Rica</option>
					<option value="CO">Colombia</option>
				</select>
			</div>
			<div className="input-field col s12">
				<input
					type="submit"
					className="waves-effect waves-light btn-large btn-block yellow accent-4"
					value="Search"
				/>
			</div>
		</form>
	);
}

export default Form;
