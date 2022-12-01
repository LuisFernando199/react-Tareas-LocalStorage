import LogoApp from "./components/LogoApp";
import ListTasks from "./components/ListTasks";

function App() {
  
  return (
    <div className = 'AppTask'>
      <LogoApp/>
      <div className="TaskList">
        <h1>Mis Tareas</h1>
      <ListTasks/>
      </div>
      <h2>- Luis Fernando ©2022 React (JS,HTML,CSS) -</h2>
    </div>
  );
}

export default App;
