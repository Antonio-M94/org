import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFomulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: 'Front End',
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      fav: false,
    },
    {
      id: uuid(),
      equipo: 'Programación',
      foto: 'https://github.com/genesysrm.png',
      nombre: 'Genesys Rondón',
      puesto: 'Desarrolladora de software e instructora',
      fav: true,
    },
    {
      id: uuid(),
      equipo: 'UX y Diseño',
      foto: 'https://github.com/JeanmarieAluraLatam.png',
      nombre: 'Jeanmarie Quijada',
      puesto: 'Instructora en Alura Latam',
      fav: false,
    },
    {
      id: uuid(),
      equipo: 'Programación',
      foto: 'https://github.com/christianpva.png',
      nombre: 'Christian Velasco',
      puesto: 'Head de Alura e Instructor',
      fav: false,
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: 'https://github.com/JoseDarioGonzalezCha.png',
      nombre: 'Jose Gonzalez',
      puesto: 'Dev FullStack',
      fav: false,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57c278',
      colorSecundario: '#D9f7e9',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82cffa',
      colorSecundario: '#e8f8ff',
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#a6d157',
      colorSecundario: '#f0f8e2',
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#e06b69',
      colorSecundario: '#fde7e8',
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#db6ebf',
      colorSecundario: '#fae9f5',
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#ffba05',
      colorSecundario: '#fff5d9',
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#ff8a29',
      colorSecundario: '#ffeedf',
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFomulario);
  };

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores((state) => [...state, colaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos((state) => [...state, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarFomulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          key={equipo.titulo}
          datos={equipo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
