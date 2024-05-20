function StopWatchPage() {
	globalThis.document.title = 'Stop Watch'

	const intervalID = useRef(null)
	const lastTime = useRef(null)
	const reset = useRef(false)
	const elapsedTimeRef = useRef(0)

	const [elapsedTime, setElapsedTime] = useState('00:00:00:00')
	const [isRunning, setRunning] = useState(false)

	useEffect(() => {
		if (isRunning) {
			lastTime.current = Date.now()
			intervalID.current = setInterval(() => {
				const now = Date.now()
				elapsedTimeRef.current += now - lastTime.current
				setElapsedTime(parseTime(elapsedTimeRef.current))
				lastTime.current = now
			}, 10)
		} else {
			clearInterval(intervalID.current)
			if (lastTime.current && !reset.current) {
				elapsedTimeRef.current += Date.now() - lastTime.current
				setElapsedTime(parseTime(elapsedTimeRef.current))
				lastTime.current = null
			}
			if (reset.current) reset.current = false
		}
		return () => clearInterval(intervalID.current)
	}, [isRunning])

	function parseTime(time) {
		const totalSeconds = Math.floor(time / 1000)
		const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0')
		const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
		const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
		const seconds = String(totalSeconds % 60).padStart(2, '0')

		return `${hours}:${minutes}:${seconds}:${milliseconds}`
	}

	return (
		<>
			<main>
				<div>
					<p>{elapsedTime}</p>
					<div>
						<button onClick={() => setRunning(true)}>Start</button>
						<button onClick={() => setRunning(false)}>Stop</button>
						<button
							onClick={() => {
								reset.current = true
								setRunning(false)
								elapsedTimeRef.current = 0
								setElapsedTime('00:00:00:00')
							}}>
							Reset
						</button>
					</div>
				</div>
			</main>

			<style jsx>{`
				main {
					height: 100%;
					width: 100%;
					display: grid;
					justify-items: center;
					align-items: center;
					background: rgba(255, 255, 0, 0.1);
				}
				main > div {
					border: 2px solid rgb(255, 174, 0);
					background: yellow;
					border-radius: 0.5rem;
					padding: 2rem;
					display: grid;
					justify-items: center;
					align-items: center;
					gap: 0.5rem;
				}
				p {
					width: 100%;
					text-align: center;
					font-size: 250%;
				}
				main > div > div {
					display: flex;
					justify-content: center;
					gap: 0.5rem;
					align-items: center;
				}
				button {
					padding: 0 0.2rem;
				}
			`}</style>
		</>
	)
}

export default StopWatchPage
