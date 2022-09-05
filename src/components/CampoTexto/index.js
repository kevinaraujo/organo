import "./CampoTexto.css";

const CampoTexto = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={handleChange}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
      />
    </div>
  );
};

export default CampoTexto;
