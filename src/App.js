import React,{useState} from 'react';
import './App.css';
import shoppingIcon from './assets/cart_icon.png';
import plusIcon from './assets/plus_icon.png';
import minusIcon from './assets/minus_icon.png';


function App() {
  const[value,setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Lemon', count: 1}

  ]);


  return (
    <>
    <nav className='nav'>
      <img className='nav-icon' src={shoppingIcon}  alt='shopping-icon'/>
      <h1 className='nav-title'>Shopping List</h1>
    </nav>
   <section className='container'>
    <form className='form'>
      <input 
      onChange={(e) => {setValue(e.target.value)}}
      value={value}
      className='input'
      type='text'
      placeholder='List'
      />
      <button className='add-button' type='submit'>Add</button>
    </form>
    {todos.length > 0 ? (
      <div className='todos'>
        {todos.map ((todo,index)=> {
          return (
            <div key={index} className='todo'>
              {todo.title}
              <div className='todo-icon-wrapper'>
                <div className='todo-count'>{todo.count}</div>
                <button className='todo-action-button' >
                  <img src={minusIcon} alt='minus icon'/>
                </button>
                <button className='todo-action-button' >
                  <img src={plusIcon} alt='plus icon'/>
                </button>

               
              </div>
            </div>
            
          )
        })}
      </div>
    ):(
      <div>Kosong</div>
    )} 

   </section>
    </>
  );
}

export default App;
