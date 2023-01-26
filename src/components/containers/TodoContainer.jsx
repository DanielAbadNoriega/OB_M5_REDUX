import { connect } from "react-redux";
import TodoList from "../pure/TodoList";

// ACTIONS
import { toggleTodo } from "../../store/actions/actions";

// No necesitamos exportar ningún componente, solo necesitamos
// implementar la lógica que heredan los componentes hijos.
/* export const TodoContainer = (props) => {
  return <div>TodoContainer</div>;
}; */

//Filter Todo List
const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;

    case "SHOW_ACTIVE":
      return todos.filter((todo) => !todo.completed);

    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed);

    default:
      return todos;
  }
};

//Props que tienen que ver con el estado
const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState),
  };
};

//Funciones que tienen que ver con el envío de acciones
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

// with this, we connect State & Dispatch to TodoList's Props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodosContainer;
