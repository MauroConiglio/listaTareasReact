import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas.jsx'

const FormularioTareas = () => {
    return (
        <section>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Tarea" />

                    <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </section>
    );
};

export default FormularioTareas;