import "./Form.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useMemo, useState } from "react";
import Errors from "../Errors";

export const Form = (props) => {
  const handleSave = (event) => {
    setShowErrors(name.length === 0);

    event.preventDefault();
    props.onNewColaborator({
      name,
      role,
      image,
      team,
    });

    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const memoizedErrors = useMemo(
    () => <Errors showErrors={showErrors} />,
    [showErrors]
  );

  return (
    <section className="form">
      <form onSubmit={handleSave}>
        <h2>Fill the data to create colaborator card</h2>
        <CampoTexto
          label="Name"
          placeholder="Type your name"
          value={name}
          setValue={setName}
        />
        <CampoTexto
          label="Role"
          placeholder="Type your role"
          value={role}
          setValue={setRole}
        />
        <CampoTexto
          label="Image"
          placeholder="Type the image path"
          value={image}
          setValue={setImage}
        />
        <ListaSuspensa
          label="Time"
          itens={props.teams}
          value={team}
          setValue={setTeam}
        />
        <Botao>Criar Card</Botao>
        {memoizedErrors}
      </form>
    </section>
  );
};
