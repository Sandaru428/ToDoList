import React, { useEffect, useRef, useState } from 'react'
import Items from '../components/Items';
import Swal from 'sweetalert2';

let count = 0;

const Home = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value = "";
        localStorage.setItem('todos_count',count)
    }

    useEffect( () => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
        count = localStorage.getItem('todos_count');
    },[])

    useEffect( () => {
        setTimeout( () => {
            console.log(todos);
            localStorage.setItem('todos',JSON.stringify(todos))
        },100);
    },[todos])

    const handleAbout = () => {
        Swal.fire ({
            title: 'About this App',
            html: 'Version   : 1.0.0' + '<br>' +
                  'Developer : Sandaru428' + '<br>' +
                  'Platform  : React JS',
            confirmButtonColor: '#002765',
            width: '400px'
        });
    }

    return (
    <div className='container'>  
        <div className='todo'>
            <div className='header'>
                <button className='about-button' onClick={handleAbout}>About</button>
            </div>
            
            <div className='todo-header'>To-Do List</div>

            <div className='todo-add'>
                <input ref={inputRef} type='text' placeholder='type your task here' className='todo-input' />
                <div onClick={() => {add()}} className='todo-add-button'>ADD</div>
            </div>

            <div className='todo-list'>
                {todos.map((item,index) => {
                    return <Items key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
                })}
            </div>
        </div>
    </div>
    )
}

export default Home
