const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) =>{
    //Al no poner el '?' te tira un error de que no puede leer el 'type' of undefined porque en 'Let todos = todoReducer(); ejecutamos por primera vez y el action está en undefined. Entonces con el signo decis que si tiene algun valor que lo lea y si no, que no haga nada.

    if (action?.type === 'agregar'){
        return [...state, action.payload]
    }

    //!SI O SI HAY QUE RETORNAR UN STATE
    return state;
}

let todos = todoReducer();




const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, action)


console.log(todos)




//no usar el push cuando estás trabajando en react porque el push muta el objeto. siempre usar el spreadOperator
//crear un newTodo y enviar al state porque el state está dentro del reducer y ahi nosotros tenemos que hacer algo para modificar el estado, en este caso agregar. Entonces para poder mandar el newTodo al reducer está la propiedad de 'action' en action se le pasa el type:'nombre' y el payload:'newTodo' o sea es la informacion del objeto que se le pasa. 