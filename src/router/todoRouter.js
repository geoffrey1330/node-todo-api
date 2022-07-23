const todoRoute = require('../core/routerConfig');
const todoController = require('../controller/todoController');
const { authenticate } = require('../core/userAuth');

todoRoute.route('/todos')
    .post(authenticate, todoController.create)
    .get(authenticate, todoController.getAllTodos);

todoRoute.route('/todo/:id')
    .get(authenticate, todoController.getTodoById)
    .put(authenticate, todoController.updateTodoById)
    .delete(authenticate, todoController.deleteTodoById);

module.exports = todoRoute;
