import { useState } from 'react';
import Boton from '../Boton';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import './Formulario.css';

const Formulario = (props) => {
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [foto, setFoto] = useState('');
  const [equipo, setEquipo] = useState('');
  const [titulo, actualizarTitulo] = useState('');
  const [color, actualizarColor] = useState('');

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          equipos={props.equipos}
          valor={equipo}
          actualizarEquipo={setEquipo}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Título"
          placeholder="Ingresar título"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hex."
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />

        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
