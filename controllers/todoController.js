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
  },

  getTodoById: async (req, res) => {
    try {
      const { id } = req.params;
      const todoById = await Todo.findById(id);
      res.json({ todoById });
    } catch {
      console.error("Error fetching todos by its id:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
   createTodo: async (req, res) => {
        const { content } = req.body;

        // create a new todo object or instance
        const newTodo = new Todo({
            content,
            isCompleted: false,
        });

        await newTodo.save();

        // send the newly created todo as a response
        res.status(201).json(newTodo);
    }
};

module.exports = todoController;
