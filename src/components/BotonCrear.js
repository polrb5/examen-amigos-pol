import PropTypes from "prop-types";

export const BotonCrear = (props) => {
  const { setFormularioAbierto, setAccion } = props;
  return (
    <section>
      <button
        className="boton btn col-12"
        onClick={() => {
          setFormularioAbierto(true);
          setAccion("anyadir");
        }}
      >
        Crear amigo
      </button>
    </section>
  );
};

BotonCrear.propTypes = {
  setFormularioAbierto: PropTypes.func.isRequired,
};
