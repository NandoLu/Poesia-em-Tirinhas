import Banner from './components/Banner'
import Form from './components/Form';
import RoleSection from './components/RoleSection';

function App() {

  const roles =[
    {
      nome: 'Artista',
    },
    {
      nome: 'Orientador',
    },
    {
      nome: 'Mídia',
    },
  ]

  return (
    <div className="App">
      <Banner/>
      <Form/>
      {roles.map(role =><RoleSection nome={role.nome}/>)}


    </div>
  );
}

export default App;
