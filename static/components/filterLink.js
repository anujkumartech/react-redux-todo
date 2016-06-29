import React, { PropTypes } from 'react'


export function FilterLinks(props) {
  const { filterVal,filterTodo} = props;
  
//   const onSubmit = (event) => {
//     const input = event.target;
//     const text = input.value;
//     const enterPressed = (event.which == 13);
//     const validText = text.length > 0;

//     if(enterPressed && validText) {      
//       addTodo(text);
//       input.value = '';
//     }
//   };    
  
//  const updateTodo = (event,id) => {
//     const input = event.target;
//     const text = input.value;
//     const enterPressed = (event.which == 13);
//     const validText = text.length > 0;
//     if(enterPressed && validText) {      
//       editTodo(id,text);
//       input.value = '';
//     }
//   };
//   console.log(todos);

    //    {filterVal.map(filter => (
    //         <a class="navbar-brand" href="#">filter</a>
    //     ))}
  return (
    <div className="row">
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
            {filterVal.map((f) => (
                <li key={f.get('id')} className={f.get('active') === true ? 'active':''} onClick={() =>{filterTodo(f.get('val'))}}><a href="#">{f.get('val')}</a></li>
            ))}            
            </ul>
        </nav>
    </div>
  );
}

