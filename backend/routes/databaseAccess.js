import express from 'express';
const router = express.Router();

// import TodoItem from './backend/models/ToDoItem';

router.get('/add', (req, res) => {
  res.send('Hello');
});

// const testTodo = new TodoItem({
//     task: "test task"
//   });
//
//   testTodo.save()
//     .then(response => {
//       res.send(response);
//     })
//     .catch(error => {
//       res.send(error);
//     })
//   });

export default router;
