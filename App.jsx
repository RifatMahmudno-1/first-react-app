function getPage() {
	if (globalThis.location.pathname === '/clock') return 'clock'
	else if (globalThis.location.pathname === '/stop_watch') return 'stop_watch'
	return 'todo'
}

function App() {
	const [page, setPage] = useState(getPage())

	useEffect(() => {
		if (page === 'todo') globalThis.history.pushState({}, '', '/todo')
		else if (page === 'clock') globalThis.history.pushState({}, '', '/clock')
		if (page === 'stop_watch') globalThis.history.pushState({}, '', '/stop_watch')
	}, [page])

	return (
		<>
			<div className="main_app">
				<Nav setPage={setPage} page={page} />
				{page === 'todo' ? <TodoPage /> : page === 'clock' ? <ClockPage /> : <StopWatchPage />}
			</div>

			<style jsx>{`
				.main_app {
					display: grid;
					grid-template-rows: auto 1fr;
					min-height: 100vh;
				}
			`}</style>
		</>
	)
}

export default App
