import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/create-modal/create-modal";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalSwitch = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Cardapio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card key={foodData.id} {...foodData} />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleModalSwitch} />}
      <button onClick={handleModalSwitch}>novo</button>
    </div>
  );
}

export default App;
