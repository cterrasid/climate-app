import React from 'react';

function Form() {
	const handleChange = e => {
		//cambiar el state
	};

	return (
		<form>
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
					value="Search climate"
				/>
			</div>
		</form>
	);
}

export default Form;
