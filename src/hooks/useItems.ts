import { useState } from "react";
import { ElementType } from "../App";

export const useItems = () => {
  const [elements, setElements] = useState<ElementType[]>([]);
  const addItem = (text: string) => {
    const newElement = { name: text, uuid: crypto.randomUUID() };
    setElements((prevElements) => [...prevElements, newElement]);
  };
  const deleteItem = (uuid: string) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.uuid != uuid)
    );
  };
  return { elements, addItem, deleteItem };
};
