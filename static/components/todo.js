import React, { PropTypes } from 'react'

const Todo = ({todo,deletefunction,togglefunction,enableEdit,editTodofunction}) => (
                <div className="dis-inline">
                    <button className="btn btn-danger margin-left-btn" onClick={deletefunction}>Delete</button> 
                    <button className="btn btn-info margin-left-btn" onClick={enableEdit}>Edit</button>  
                    <span className={todo.done ? "done-todo": ""}  onClick={togglefunction}>{todo.text}</span>                     
                    <input className={todo.editMode ? "dis-inline form-control margin-left-btn": "hidden"} type="text"  placeholder="new value" onKeyDown={editTodofunction} />
                </div>
            )

Todo.propTypes = {
    todo : PropTypes.object.isRequired,
    deletefunction: PropTypes.func.isRequired,
    togglefunction: PropTypes.func.isRequired,
    enableEdit: PropTypes.func.isRequired
};
// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }
//<button className={todo.editMode ? "btn btn-info margin-left-btn": "btn btn-info margin-left-btn hidden"}  onClick={enableEdit}>Update</button> 
export default Todo