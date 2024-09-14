import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioTareas = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Tarea" />

                    <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default FormularioTareas;