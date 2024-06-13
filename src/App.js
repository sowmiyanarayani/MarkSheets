import { React } from 'react';
import './App.scss';
import StudentTable from './components/StudentTable';

const App = (context) =>
	<div className="App">
		<StudentTable { ...context }/>
	</div>;

export default App;
