import './App.css'
import Produktliste from "./Produktliste.jsx";
import {useState} from "react";

function App() {

  const [produktliste, setProduktliste] = useState([])

  function handleAddProdukt(newProdukt) {
    setProduktliste([...produktliste, newProdukt])
  }

  function handleDeleteProdukt(produktToDelete) {
    setProduktliste(
        produktliste.filter(produkt => produkt !== produktToDelete)
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    handleAddProdukt(data.produkt)
    event.target.reset()
  }

  return (
      <>
        <h1>Einkaufsliste</h1>
        <Produktliste produkte={produktliste} onDelete={handleDeleteProdukt}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="produkt">Produkt: </label>
          <input id="produkt" type="text" placeholder="Z.b. Schokolade" name="produkt"/>
          <button type="submit">Hinzufügen</button>
        </form>
      </>
  )
}

export default App
