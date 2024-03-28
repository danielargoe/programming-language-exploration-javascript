import { useState } from "react";
import "./App.css";

function App() {
	const [id, setId] = useState(1);
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);

	function handleAddTodo() {
		if (!input) return;

		setTodos((todos) => [{ id: id, name: input }, ...todos]);
		setId((id) => (id = id + 1));
		setInput("");
	}

	function handleDeleteTodo(key) {
		const filtered = todos.filter((todo) => todo.id !== key);
		setTodos(filtered);
	}

	return (
		<>
			<div>
				<h1>ToDo List</h1>
				<div>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Enter ToDo"
					/>
					<button onClick={handleAddTodo}>Add ToDo</button>
				</div>
			</div>

			{todos && (
				<div>
					{todos.map((todo) => (
						<div key={todo.id}>
							<p
								style={{
									display: "inline",
									paddingRight: 8,
								}}
							>
								{todo.name}
							</p>
							<button onClick={() => handleDeleteTodo(todo.id)}>
								Delete
							</button>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default App;
