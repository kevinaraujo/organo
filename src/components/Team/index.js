import Colaborator from "../Colaborator";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.secondaryColor };

  return (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="colaborators">
        {props.colaborators.map((colaborator) => (
          <Colaborator {...colaborator} />
        ))}
      </div>
    </section>
  );
};

export default Team;
