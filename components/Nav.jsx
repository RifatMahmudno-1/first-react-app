function Nav(props) {
	return (
		<>
			<nav style={{ background: props.page === 'todo' ? 'aqua' : props.page === 'clock' ? 'red' : 'yellow' }}>
				<button onClick={() => props.setPage(p => 'todo')}>Todo List</button>
				<button onClick={() => props.setPage(p => 'clock')}>Digital Clock</button>
				<button onClick={() => props.setPage(p => 'stop_watch')}>Stop Watch</button>
			</nav>

			<style jsx>{`
				nav {
					display: flex;
					gap: 0.5rem;
					justify-content: center;
					padding: 0.5rem;
				}
			`}</style>
		</>
	)
}

Nav.propTypes = {
	setPage: PropTypes.func,
	page: PropTypes.string
}
export default Nav
