import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas.jsx'
import { useForm } from 'react-hook-form'
import { useState , useEffect } from 'react'

const FormularioTareas = () => {
    const {register, handleSubmit, formState: { errors },reset} = useForm()
    //aqui agregue para que no se borre el local cuando actualizo la pagina
    const leerLocalStorage = JSON.parse(localStorage.getItem('listaTareasKey')) || []
    const [arrayTareas, setArrayTareas] = useState(leerLocalStorage)

    // aqui uso useEffect
    useEffect(()=>{
        console.log('desde el useEffect, usando el ciclo de vida')
        localStorage.setItem('listaTareasKey',JSON.stringify(arrayTareas))
    }, [arrayTareas])

      const onSubmit = (data) =>{
        console.log(data.tarea)
        //guardar la tarea en el state
        setArrayTareas([...arrayTareas,data.tarea])
        //limpiamos form
        reset();

      }


    const borrarTarea = (nombreTarea)=>{
        //borrar la tarea del estado arrayTareas
        const arrayFiltrado = arrayTareas.filter((tarea)=> tarea !== nombreTarea)
        //actualizar el estado
        setArrayTareas(arrayFiltrado)
    } 

    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Tarea" {...register('tarea',{
                        required:"La tarea es un dato obligatorio",
                        minLength:{
                            value: 2,
                            message: "La tarea debe tener como minimo 2 caracteres"
                        },
                        maxLength: {
                            value: 20,
                            message: "La tarea debe tener como maximo 20 caracteres"
                        }
                    })} />

                    <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form.Group>
                <Form.Text className='text-danger'>{errors.tarea?.message}</Form.Text>
            </Form>
            <ListaTareas arrayTareas={arrayTareas} borrarTarea={borrarTarea}></ListaTareas>
        </section>
    );
};

export default FormularioTareas;