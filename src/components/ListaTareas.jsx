import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea'

const ListaTareas = ({arrayTareas}) => {
    return (
        <ListGroup>
           {
            arrayTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea}></ItemTarea>)
           }
        </ListGroup>

    );
};

export default ListaTareas;