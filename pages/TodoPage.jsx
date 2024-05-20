function addTodo(ev, setTodos, setInp) {
	ev.preventDefault()
	setInp(inp => {
		setTodos(arr => [...arr, inp])
		return ''
	})
}

function movePos(setTodos, ind, cng) {
	setTodos(td => {
		if (td[ind + cng] === undefined) return td

		const newTD = [...td]
		const el = newTD[ind]
		const otherEl = newTD[ind + cng]

		newTD[ind] = otherEl
		newTD[ind + cng] = el

		return newTD
	})
}

function deleteTD(setTodos, ind) {
	setTodos(td => {
		const newTD = [...td]
		newTD.splice(ind, 1)

		return newTD
	})
}

function TodoPage() {
	globalThis.document.title = 'Todo List'

	const [todos, setTodos] = useState([])
	const [inp, setInp] = useState('')
	return (
		<>
			<main>
				<div className="todos">
					<div>
						<div>
							{todos.map((el, ind) => (
								<div className="each" key={ind}>
									<p>
										<strong>{ind + 1}. </strong>
										{el}
									</p>
									<button onClick={() => movePos(setTodos, ind, -1)}>Up</button>
									<button onClick={() => movePos(setTodos, ind, 1)}>Down</button>
									<button onClick={() => deleteTD(setTodos, ind, -1)}>Remove</button>
								</div>
							))}
						</div>
					</div>
				</div>
				<form className="inp" onSubmit={ev => addTodo(ev, setTodos, setInp)}>
					<input type="text" required value={inp} onChange={ev => setInp(ev.target.value)} />
					<button type="submit">Add</button>
				</form>
			</main>

			<style jsx>{`
				main {
					display: grid;
					grid-template-rows: 1fr auto;
					gap: 0.5rem;
				}
				.todos {
					background: rgba(0, 255, 255, 0.1);
					padding: 0.5rem;
				}
				.todos > div {
					position: relative;
					width: 100%;
					height: 100%;
				}
				.todos > div > div {
					position: absolute;
					width: 100%;
					height: 100%;
					overflow: auto;
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
				}
				.each {
					display: grid;
					grid-template-columns: 1fr auto auto auto;
					gap: 0.5rem;
					background: aqua;
					padding: 0.2rem 0.5rem;
					border-radius: 0.2rem;
					align-items: center;
				}
				.inp {
					display: grid;
					grid-template-columns: 1fr auto;
					gap: 0.5rem;
					align-items: center;
					background: aqua;
					padding: 0.5rem;
				}
				input {
					padding: 0.2rem;
				}
				button {
					padding: 0.2rem 0.5rem;
				}
			`}</style>
		</>
	)
}

export default TodoPage
