import React,{useState} from 'react';
import './App.css';
import Navbar from './component/navbar';
import Container from './component/Container';
import plusIcon from './assets/plus_icon.png';
import minusIcon from './assets/minus_icon.png';


function App() {
  const[value,setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Lemon', count: 1}

  ]);

  // function add & reduce count todo
  const handleAddCount = (index) =>{
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  }

  const handleRedCount = (index) =>{
    const newTodos = [...todos]
    
    {newTodos[index].count > 0 ? 
      (newTodos[index].count = newTodos[index].count - 1) 
      //selama jumlah count masih di atas 0, bisa lakuin pengurangan
      :(newTodos.splice(index, 1))
     //kalo udah 0 maka hapus item object

    }
    setTodos(newTodos);
  }

  // handle submit
  const handleSubmit = (e) =>{
    e.preventDefault() //untuk mencegah browser refresh

    if(!value){
      alert('Please Input List')
      return
    }

    const addTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addTodos);
    setValue('');
  }

  const getTotalCount = () =>{
    const totalCount = todos.reduce((total,num)=>{
      return total + num.count
    },0)

    return totalCount;
  }


  return (
    <>
    <Navbar/>
   
   <Container>
    <form className='form' onSubmit={handleSubmit}>
      <input 
      onChange={(e) => {setValue(e.target.value)}}
      value={value}
      className='input'
      type='text'
      placeholder='List'
      />
      <button className='add-button' type='submit'>Add</button>
    </form>

    <div className='info'>
      <div className='info-total'>
        <p>{`Total List : ${todos.length}`}</p>
      </div>

      <div className='info-total'>
        <p>{`Total Count : ${getTotalCount()}`}</p>
      </div>

      <button onClick={()=>setTodos([])} className='button-delete-all'>
        Delete All List
      </button>
    </div>

    {todos.length > 0 ? (
      <div className='todos'>
        {todos.map ((todo,index, arr)=> {
          return (
            <div key={index} className={`todo ${!(arr.lenght === index+1) && `todo-divider`}`}>

              {todo.title}
              <div className='todo-icon-wrapper'>
                <div className='todo-count'>{todo.count}</div>
                <button onClick={()=> handleRedCount(index)} className='todo-action-button' >
                  <img className='pm-icon' src={minusIcon} alt='minus icon'/>
                </button>
                <button onClick={()=> handleAddCount(index)} className='todo-action-button' >
                  <img className='pm-icon' src={plusIcon} alt='plus icon'/>
                </button>

               
              </div>
            </div>
            
          )
        })}
      </div>
    ):(
      <div>Data Kosong</div>
    )} 

   </Container>
    </>
  );
}

export default App;
