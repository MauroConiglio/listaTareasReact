import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioTareas from './components/FormularioTareas';

function App() {

  return (
    <>
    <main className='container my-5'>

      <h1 className='text-center'>Bienvenidos</h1>
      <h2>Ingresa tus tareas</h2>
    <FormularioTareas></FormularioTareas>
    </main>
  
    </>
  )
}

export default App
