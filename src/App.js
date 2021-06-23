import { useEffect, useState } from "react";
import { BotonCrear } from "./components/BotonCrear";
import { CardsAmigos } from "./components/CardsAmigos";
import { Formulario } from "./components/Formulario";

function App() {
  const [fomrularioAbierto, setFormularioAbierto] = useState(false);

  const urlAPI = "http://localhost:3001/amigos";
  const [amigos, setAmigos] = useState([]);
  const [accion, setAccion] = useState("");

  const listaAmigosAPI = async () => {
    const response = await fetch(urlAPI);
    if (!response.ok) {
      return;
    }
    const datos = await response.json();
    if (datos) {
      setAmigos(datos);
    }
  };
  useEffect(() => {
    listaAmigosAPI();
  }, []);

  const borrarAmigo = async (amigoABorrar) => {
    const response = await fetch(urlAPI + amigoABorrar.id, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    } else {
      setAmigos(amigos.filter((amigo) => amigoABorrar.id !== amigo.id));
    }
  };
  const nuevoAmigo = async (amigoAmodificar) => {
    const response = await fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigoAmodificar),
    });
    if (!response.ok) {
      return;
    } else {
      setAmigos([...amigos, amigoAmodificar]);
    }
  };

  return (
    <div className="container">
      <header className="row">
        <h1>
          Gestión de mis <span>6</span> amigos
        </h1>
      </header>
      <main className="row">
        {fomrularioAbierto && (
          <Formulario
            setFormularioAbierto={setFormularioAbierto}
            nuevoAmigo={nuevoAmigo}
            amigos={amigos}
            accion={accion}
            formularioAbierto={setFormularioAbierto}
          />
        )}
        {!fomrularioAbierto && (
          <BotonCrear
            setFormularioAbierto={setFormularioAbierto}
            setAccion={setAccion}
          />
        )}
        <CardsAmigos
          amigos={amigos}
          borrarAmigo={borrarAmigo}
          setAccion={setAccion}
        />
      </main>
    </div>
  );
}

export default App;
