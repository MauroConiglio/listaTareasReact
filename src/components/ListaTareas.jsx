import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea'

const ListaTareas = ({arrayTareas , borrarTarea}) => {
    return (
        <ListGroup>
           {
            arrayTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
           }
        </ListGroup>

    );
};

export default ListaTareas;