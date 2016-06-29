
import { List, Map } from 'immutable';
//import { combineReducers } from 'redux'
import {  combineReducers } from 'redux-immutable';


/*const init = List([
  Map({ id: 0, done: true,  text: 'TODO 1',editMode:false }),
  Map({ id: 1, done: false, text: 'TODO 2',editMode:false }),
  Map({ id: 2, done: false, text: 'TODO 1',editMode:false }),
  Map({ id: 3, done: false, text: 'TODO 1',editMode:false })    
]);

const initalData = Map({
  todos:List([
    Map({ id: 0, done: true,  text: 'TODO 1',editMode:false }),
    Map({ id: 1, done: false, text: 'TODO 2',editMode:false }),
    Map({ id: 2, done: false, text: 'TODO 1',editMode:false }),
    Map({ id: 3, done: false, text: 'TODO 1',editMode:false })    
  ]),
  filterVal:List([
     Map({ id: 0,active: true,  val: 'All'}),
     Map({ id: 1,active: false,  val: 'Finished'}),
     Map({ id: 2,active: false,  val: 'Pending'})
  ])
});*/

const uid = () => Math.random().toString(4).slice(3);

/*export default function reducer(storeData=initalData, action) {
  console.log("-----action---");
  console.log(action.type);  
  switch(action.type) {
    case 'ADD_TODO':
      return storeData.update('todos', todos =>todos.push(Map({'text':action.text,
                                                                'id':uid(),
                                                                'done':false      
                                                          }))
                        );  
    case 'DELETE_TODO':
         return storeData.update('todos', todos => todos.filter((t) => {
                                                      return  t.get('id') !== action.id
                                                   })
         );                   
    case 'TOGGLE_TODO':
       return storeData.update('todos', todos => todos.map(t => {
                                                    if(t.get('id') === action.id) {
                                                      return t.update('done', done => !done);
                                                    } else {
                                                      return t;
                                                    }
                                                  })
       );
    case 'ENABLE_EDIT_TODO':
       return storeData.update('todos', todos => todos.map(t => {
                                                  if(t.get('id') === action.id) {
                                                    return t.update('editMode', editMode => !editMode);
                                                  } else {
                                                    return t;
                                                  }
                                                 })
      ); 
    case 'EDIT_TODO':
      return storeData.update('todos', todos => todos.map(t => {
                                                  if(t.get('id') === action.id) {
                                                    return t.merge({text:action.text,editMode:false});
                                                  } else {
                                                    return t;
                                                  }
                                                })
      );
    
    case 'FILTER_TODO':
        return storeData.update('filterVal', filterVal => filterVal.map(f => {
                                                  if(f.get('val') === action.val) {
                                                    return  f.update('active', () => true);
                                                  } else {
                                                    return f.update('active', () => false);
                                                  }
                                                })
        );
    default:
      return storeData;
  }
}*/


/*** Ideal to break in todoreducer module***/
const todos = (todos = List([]), action) => {
  console.log("-----action from todos---");
  console.log(action.type);
  switch(action.type) { 
     case 'FETCH_TODO':
      action.todoData.map(todo =>{
       todos = todos.push(Map(todo));
      });
      return todos;
      
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
      return  todos.map(todo => {
          if(todo.get('id') === action.id) {
            return todo.update('done', done => !done);
          } else {
            return todo;
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

/*** Ideal to break in filterReducer module***/
const filterVal = (filterVal=List([]), action) => {
    console.log("-----action from filter---");
    console.log(action.type);  
    switch(action.type) {
      case 'FILTER_TODO':
        return  filterVal.map(f => {
          if(f.get('val') === action.val) {
            return  f.update('active', () => true);
          } else {
            return f.update('active', () => false);
          }
        });
    default:
      return filterVal;
  
  }
}


export default combineReducers({  
  todos,
  filterVal
});


//export default reducer
