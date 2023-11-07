import "./App.css";
import { useItems } from "./hooks/useItems";
import { useSEO } from "./hooks/useSEO";

export type ElementType = { name: string; uuid: string };
function App() {
  const { addItem, deleteItem, elements } = useItems();
  useSEO({
    title: `[${elements.length}] Prueba tecnica react ]`,
    description: "lista de elemtos que se agregan y se remueven",
  });
  const addElement = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem("elementTarget");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || !input) return;

    addItem(input.value);
    input.value = "";
  };
  const handleDelete = (uuid: string) => () => {
    deleteItem(uuid);
  };
  return (
    <main>
      <aside>
        <form aria-label="Enter items" onSubmit={addElement}>
          <label>
            Ingrese un nombre:
            <input type="text" name="elementTarget" />
          </label>
          <button>Agregar elemento</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {elements.map((element: ElementType) => (
            <li key={element.uuid}>
              {element.name}{" "}
              <button className="delete" onClick={handleDelete(element.uuid)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
