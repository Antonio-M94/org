import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Equipo.css';

const Equipo = (props) => {
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
  const { titulo, colorPrimario, colorSecundario, id } = props.datos;

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
        >
          <input
            type="color"
            className="input-color"
            value={colorSecundario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                key={index}
                datos={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
