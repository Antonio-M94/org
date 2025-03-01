import './ListaOpciones.css';

const ListaOpciones = (props) => {
  const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio} required>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
