import PropTypes from 'prop-types';
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( description.trim().length <= 1) return;
        
        onResetForm();

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            name='description'
            onChange={onInputChange}
            value={description}
        />
        <button
            type="submit"
            className="btn btn-outline-info mt-2"
        >
            Agregar
        </button>
    </form>
  )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}