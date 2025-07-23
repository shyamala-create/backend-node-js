const Todo = require("../model/todo");

const todoController = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find();
            console.log("Fetched todos:", todos);
            res.json({ todos });
        } catch (err) {
            console.error("Error fetching todos:", err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

module.exports = todoController;
