
import './App.css';

function App() {
  const columns = {
    start: {id: 'start', title: 'To Do'},
    inProgress: {id: 'inProgress', title: 'In Progress'},
    completed: {id: 'completed', title: 'Completed'}
  }

  const tasks = {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Watch my favorite show'},
    'task-3': {id: 'task-3', content: 'Charge my phone'},
    'task-4': {id: 'task-4', content: 'Cook dinner'},
  }
  return (
    <div>
      <div className= 'w-screen flex justify-center items-center h-20 bg-blue-500 text-white'>
        <p className='text-3xl font-bold'>To do list</p>
      </div>
    </div>
    
  );
}

export default App;
