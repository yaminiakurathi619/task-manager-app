const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.delete("/:id", auth, deleteTask);

router.put("/:id", auth, updateTask);

module.exports = router;
