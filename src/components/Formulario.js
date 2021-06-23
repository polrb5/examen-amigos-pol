import PropTypes from "prop-types";
import { useState } from "react";

export const Formulario = (props) => {
  const {
    setFormularioAbierto,
    nuevoAmigo,
    amigos,
    accion,
    formularioAbierto,
  } = props;

  const idMasAlta = amigos.reduce((acumulador, amigo) => {
    if (amigo.id > acumulador) {
      acumulador = amigo.id;
      return amigo.id;
    } else {
      return acumulador;
    }
  }, 0);
  const [amigo, setAmigo] = useState({
    nombre: "",
    apellido: "",
    valoracion: "",
    id: idMasAlta + 1,
  });

  const guardarAmigo = (e) => {
    e.preventDefault();
    if (accion === "anyadir") {
      nuevoAmigo(amigo);
      setFormularioAbierto(false);
    }
  };
  return (
    <section>
      <form className="row" onSubmit={guardarAmigo}>
        <div className="form-group col-3">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={amigo.nombre}
            onChange={(e) => setAmigo({ ...amigo, nombre: e.target.value })}
          />
        </div>
        <div className="form-group col-3">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={amigo.apellido}
            onChange={(e) => setAmigo({ ...amigo, apellido: e.target.value })}
          />
        </div>
        <div className="form-group col-2">
          <label htmlFor="valoracion">Valoración:</label>
          <select
            id="valoracion"
            className="form-control"
            onChange={(e) => setAmigo({ ...amigo, valoracion: e.target.value })}
          >
            <option defaultValue>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="col">
          <button className="boton btn col" type="submit">
            Crear
          </button>
          <button
            type="button"
            className="boton btn col"
            onClick={() => setFormularioAbierto(false)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};

Formulario.propTypes = {
  setFormularioAbierto: PropTypes.func.isRequired,
  nuevoAmigo: PropTypes.func.isRequired,
  amigos: PropTypes.array.isRequired,
};
