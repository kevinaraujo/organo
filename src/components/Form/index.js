import "./Form.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Form = (props) => {
  const teams = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Inovação e Gestão",
  ];

  const handleSave = (event) => {
    event.preventDefault();
    props.onNewColaborator({
      name,
      role,
      image,
      team,
    });
  };

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  return (
    <section className="form">
      <form onSubmit={handleSave}>
        <h2>Fill the data to create colaborator card</h2>
        <CampoTexto
          label="Name"
          placeholder="Type your name"
          required={true}
          value={name}
          setValue={setName}
        />
        <CampoTexto
          label="Role"
          placeholder="Type your role"
          required={true}
          value={role}
          setValue={setRole}
        />
        <CampoTexto
          label="Image"
          placeholder="Type the image path"
          required={true}
          value={image}
          setValue={setImage}
        />
        <ListaSuspensa
          label="Time"
          itens={teams}
          required={true}
          value={team}
          setValue={setTeam}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
