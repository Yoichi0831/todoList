import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // jsx
// root.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>
// );

ReactDOM.render(<TodoList />, document.getElementById('root'))