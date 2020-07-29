import React, { useEffect } from 'react'
import TodoList from './components/00.TodoList'
import { fetchTodosDataIfNeeded } from './actions/todos'
import { connect } from 'react-redux'

function App({ onFetchData }) {
	useEffect(() => {
		onFetchData()
  }, [onFetchData])
  
	return (
		<div className='App'>
			<TodoList />
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	onFetchData: () => dispatch(fetchTodosDataIfNeeded()),
})

export default connect(null, mapDispatchToProps)(App)
