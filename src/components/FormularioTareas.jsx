import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas.jsx'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const FormularioTareas = () => {
    const {register, handleSubmit, formState: { errors },reset} = useForm()
    const [arrayTareas, setArrayTareas] = useState([])

      const onSubmit = (data) =>{
        console.log(data.tarea)
        //guardar la tarea en el state
        setArrayTareas([...arrayTareas,data.tarea])
        //limpiamos form
        reset();

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
            <ListaTareas arrayTareas={arrayTareas}></ListaTareas>
        </section>
    );
};

export default FormularioTareas;