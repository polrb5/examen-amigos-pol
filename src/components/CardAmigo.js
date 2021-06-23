import PropTypes from "prop-types";
import { FaPencilAlt, FaStar, FaTimes } from "react-icons/fa";

export const CardAmigo = (props) => {
  const {
    amigo: { nombre, apellido, valoracion },
    borrarAmigo,
    amigo,
    setAccion,
  } = props;
  return (
    <div className="card col-4">
      <ul className="lista-datos list-unstyled mt-2">
        <li className="datos row">
          <span className="nombre col">Nombre: {nombre}</span>
        </li>
        <li className="datos row">
          <span className="nombre-dato col">Apellido: {apellido}</span>
        </li>
        <li className="datos row">
          <span className="nombre-dato col">
            Valoración: {valoracion}
            <FaStar />
          </span>
        </li>
      </ul>
      <div className="icono-card">
        <i className="icono" onClick={() => borrarAmigo(amigo)}>
          <FaPencilAlt />
        </i>
        <i className="icono" onClick={setAccion("modificar")}>
          <FaTimes />
        </i>
      </div>
    </div>
  );
};

CardAmigo.propTypes = {
  amigo: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    valoracion: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  borrarAmigo: PropTypes.func.isRequired,
};
