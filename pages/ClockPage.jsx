function getTime() {
	const date = new Date()
	return {
		hour: (() => {
			const h = date.getHours()
			if (h === 0) return 12
			if (h > 12) return h - 12
			return h
		})()
			.toString()
			.padStart(2, '0'),
		minute: date.getMinutes().toString().padStart(2, '0'),
		second: date.getSeconds().toString().padStart(2, '0'),
		meridiem: date.getHours() >= 12 ? 'PM' : 'AM'
	}
}

function TodoPage() {
	globalThis.document.title = 'Digital Clock'

	const [time, setTime] = useState(getTime())

	useEffect(() => {
		const int = setInterval(() => {
			setTime(getTime())
		}, 1000)

		return () => clearInterval(int)
	}, [])

	return (
		<>
			<main>
				<p>
					{time.hour}:{time.minute}:{time.second} {time.meridiem}
				</p>
			</main>

			<style jsx>{`
				main {
					display: grid;
					justify-items: center;
					align-items: center;
					background: rgba(255, 0, 0, 0.1);
				}
				p {
					background: red;
					padding: 2rem;
					font-size: 250%;
					border-radius: 0.5rem;
				}
			`}</style>
		</>
	)
}

export default TodoPage
