import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../daat/foodData";

import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

function Input({ label, value, updateValue }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(e) => updateValue(e.target.value)} />
    </>
  );
}

interface CreateModalProps {
  closeModal: () => void;
}

export function CreateModal({ closeModal }: CreateModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isLoading } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
    };

    mutate(foodData);
  };

  useEffect(() => {
    if (isSuccess) closeModal();
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="price" value={price} updateValue={setPrice} />
          <Input label="image" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          {isLoading ? "postando" : "postar"}
        </button>
      </div>
    </div>
  );
}
