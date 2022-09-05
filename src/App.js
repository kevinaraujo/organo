import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";

function App() {
  const [colaborators, setColaborators] = useState([]);

  const addColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

  useEffect(() => {
    console.log("novo", colaborators);
  }, [colaborators]);
  return (
    <div>
      <Banner />
      <Form onNewColaborator={addColaborator} />
    </div>
  );
}

export default App;
