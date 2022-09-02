import "./Form.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

export const Form = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Inovação e Gestão",
  ];

  const handleSave = (event) => {
    event.preventDefault();
    console.log("saved");
  };

  return (
    <section className="form">
      <form onSubmit={handleSave}>
        <h2>Fill the data to create colaborator card</h2>
        <CampoTexto label="Name" placeholder="Type your name" required={true} />
        <CampoTexto label="Role" placeholder="Type your role" required={true} />
        <CampoTexto
          label="Image"
          placeholder="Type the image path"
          required={true}
        />
        <ListaSuspensa label="Time" itens={times} required={true} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
