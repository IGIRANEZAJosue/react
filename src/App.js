import { useState, useEffect } from 'react';
import './App.css';

//IMPORTED COMPONENTS		
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	//USE EFFECT 
	useEffect(() => {
		filterHandler();
	}, [todos, status])

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todos => todos.completed === true));
				break;
			
			case "uncompleted":
				setFilteredTodos(todos.filter(todos => todos.completed === false));
				break;

			default:
				setFilteredTodos(todos);
				break;
		}
	}

	//SAVE TO LOCAL STORAGE
	const saveToLocalStorage = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}

  	return (
    	<div className="App">
			<header>
				<h1>MyTodo.List</h1>
			</header>

			<Form todos = {todos} setTodos = {setTodos} inputText = {inputText} setInputText ={setInputText} setStatus = {setStatus} />
			<TodoList todos = {todos} setTodos = {setTodos} filteredTodos = {filteredTodos} />



    	</div>
  	);

	
}

export default App;
