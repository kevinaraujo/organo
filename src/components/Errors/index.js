import "./Errors.css";

const Errors = ({ showErrors }) => {
  const rules = [
    "Preencha o campo Name",
    "Preencha o campo Role",
    "Preencha o campo Image",
    "Preencha o campo Time",
  ];

  return (
    showErrors && (
      <ul>
        {rules.map((rule) => (
          <li>{rule}</li>
        ))}
      </ul>
    )
  );
};

export default Errors;
