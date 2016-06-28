
import { List, Map } from 'immutable';

const init = List([
  Map({ id: 0, done: true,  text: 'TODO 1',editMode:false }),
  Map({ id: 1, done: false, text: 'TODO 2',editMode:false }),
  Map({ id: 2, done: false, text: 'TODO 1',editMode:false }),
  Map({ id: 3, done: false, text: 'TODO 1',editMode:false })    
]);
const uid = () => Math.random().toString(4).slice(3);

export default function reducer(todos=init, action) {
  console.log("-----action---");
  console.log(action.type);  
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map({'text':action.text,
                             'id':uid(),
                             'done':false      
                        }));
    case 'DELETE_TODO':
        return todos.filter((t) => {
                       return  t.get('id') !== action.id
            });                    
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if(t.get('id') === action.id) {
          return t.update('done', done => !done);
        } else {
          return t;
        }
      });
    case 'ENABLE_EDIT_TODO':
      return todos.map(t => {
        if(t.get('id') === action.id) {
          return t.update('editMode', editMode => !editMode);
        } else {
          return t;
        }
      }); 
    case 'EDIT_TODO':
      return todos.map(t => {
        if(t.get('id') === action.id) {
          return t.merge({text:action.text,editMode:false});
        } else {
          return t;
        }
      });  
    default:
      return todos;
  }
}