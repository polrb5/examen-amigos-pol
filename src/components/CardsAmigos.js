import PropTypes from "prop-types";
import { CardAmigo } from "./CardAmigo";

export const CardsAmigos = (props) => {
  const { amigos, borrarAmigo, setAccion } = props;

  return (
    <>
      <div className="col-12">
        <section className="main-container row py-5">
          {amigos.map((amigo) => (
            <CardAmigo
              key={amigo.id}
              amigo={amigo}
              borrarAmigo={borrarAmigo}
              setAccion={setAccion}
            />
          ))}
        </section>
      </div>
    </>
  );
};

CardsAmigos.propTypes = {
  amigos: PropTypes.array.isRequired,
  borrarAmigo: PropTypes.func.isRequired,
  setAccion: PropTypes.func.isRequired,
};
