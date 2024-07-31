import './Formtext.css';
const FormText = (props) => {
	// Arrow function

	return (
		<div className="formText">
			<label>{props.label}</label>
			<input placeholder={props.placeholder}></input>
		</div>
	);
};

export default FormText;
