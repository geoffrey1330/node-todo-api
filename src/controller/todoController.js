const { error, success } = require("../utils/baseController");
const { logger } = require("../utils/logger");
const Todo = require("../service/todo");

exports.create = async (req, res) => {
    try {
        const { name, thingsTodo, time } = req.body;
        const userId = req.user._id;
        const todo = await new Todo({
            name,
            thingsTodo,
            time,
            userId
        }).create();
        return success(res, { todo });
    }catch(err) {
        logger.error("Error occurred at signup", err);
        return error(res, { code: err.code, message: err })
    }
}

// get all user todos
exports.getAllTodos = async (req, res) => {
    try {
        const userId = req.user._id;
        const todos = await new Todo({ userId }).getAllTodos();
        return success(res, { todos });
    }catch(err) {
        logger.error("Error occurred at signup", err);
        return error(res, { code: err.code, message: err })
    }
}

// get a todo by id
exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const todo = await new Todo({ id, userId }).getTodoById();
        return success(res, { todo });
    }catch(err) {
        logger.error("Error occurred at signup", err);
        return error(res, { code: err.code, message: err })
    }
}

// update a todo by id
exports.updateTodoById = async (req, res) => {
    try {
        const { name, thingsTodo, time } = req.body;
        const { id } = req.params;
        const userId = req.user._id;
        const todo = await new Todo({ id, userId, name, thingsTodo, time }).updateTodoById();
        return success(res, { todo });
    }catch(err) {
        logger.error("Error occurred at signup", err);
        return error(res, { code: err.code, message: err })
    }
}

// delete a todo by id
exports.deleteTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const todo = await new Todo({ id, userId }).deleteTodoById();
        return success(res, { todo });
    }catch(err) {
        logger.error("Error occurred at signup", err);
        return error(res, { code: err.code, message: err })
    }
}
