import "./Colaborator.css";

const Colaborator = ({ backgroundColor, name, role, image }) => {
  return (
    <div className="colaborador" key={name}>
      <div className="cabecalho" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Colaborator;
