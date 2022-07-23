const TodoSchema = require('../models/todoModel');
const {throwError} = require("../utils/handleErrors");
const {validateParameters} = require('../utils/util');

class Todo {
    constructor(data) {
        this.data = data;
        this.errors = [];
    }

    async create() {
        const { isValid, messages } = validateParameters(
            ["name", "thingsTodo", "time"],
            this.data
          );
          if (!isValid) { 
            throwError(messages);
          }
          const todo = new TodoSchema(this.data);
          const newTodo = await todo.save();
        return newTodo;
    }
    // get all user todos
    async getAllTodos() {
        const todos = await TodoSchema.find({
            userId: this.data.userId
        });
        return todos;
    }
    // get a todo by id
    async getTodoById() {
        const todo = await TodoSchema.findOne({
            _id: this.data.id,
            userId: this.data.userId
        });
        return todo;
    }
    // update a todo by id
    async updateTodoById() {
        const { id, userId, name, thingsTodo, time } = this.data;
        const todo = await TodoSchema.findOneAndUpdate(
            {
                _id: id,
                userId
            },
            {
                $set: {
                    name,
                    thingsTodo,
                    time
                }
            },
            {
                new: true
            }
        );
        return todo;
    }
    // delete a todo by id
    async deleteTodoById() {
        const { id, userId } = this.data;
        const todo = await TodoSchema.findOneAndDelete({
            _id: id,
            userId
        });
        return todo;
    }
};

module.exports = Todo;