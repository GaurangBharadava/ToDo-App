const {Router} = require('express');
const {  getTodos , saveTodo, updateTodo, deleteTodo} = require('../Controller/TodoController');

const router = Router();

router.get('/get',getTodos);
router.post('/post',saveTodo);
router.put('/update/:id',updateTodo);
router.delete('/delete/:id',deleteTodo);

module.exports = router;