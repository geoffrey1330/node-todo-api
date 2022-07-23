const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const todoSchema = new Schema(
    {
        userId: {
            type: String,
            index: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        thingsTodo: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        },
    },
    {
        strictQuery: 'throw'
    }
);

todoSchema.plugin(uniqueValidator, { message: '{TYPE} must be unique.' });

const TodoSchema = model('Todo', todoSchema);
module.exports = TodoSchema;
