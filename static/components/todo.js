import React, { PropTypes } from 'react'
import Input from './core/inputCompoent'
import Button from './core/buttonComponent'

const Todo = ({todo,deletefunction,togglefunction,enableEdit,editTodofunction}) => (
                <div className="dis-inline">
                    <Button classNameValue="btn btn-danger margin-left-btn" clickFunction={deletefunction} textVal="Delete" />
                    <Button classNameValue="btn btn-info margin-left-btn" clickFunction={enableEdit} textVal="Edit" />
                    <span className={todo.done ? "done-todo": ""}  onClick={togglefunction}>{todo.text}</span>                     
                    <Input classNameValue={todo.editMode ? "dis-inline form-control margin-left-btn": "hidden"} placeHolderValue="new value" keyDownFunction={editTodofunction}/>                  
                </div>
            )

Todo.propTypes = {
    todo : PropTypes.object.isRequired,
    deletefunction: PropTypes.func.isRequired,
    togglefunction: PropTypes.func.isRequired,
    enableEdit: PropTypes.func.isRequired
};
export default Todo