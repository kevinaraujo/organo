import "./CampoTexto.css";

const CampoTexto = (props) => {
  let valor = "a";
  const handleChange = (e) => {
    valor = e.target.value;
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={handleChange}
        placeholder={props.placeholder}
        required={props.required}
        value={valor}
      />
    </div>
  );
};

export default CampoTexto;
