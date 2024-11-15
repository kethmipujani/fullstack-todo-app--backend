// // ToDoRoute.js
// const { Router } = require('express');
// const { getToDo } = require('../controllers/ToDoController');
// const router = Router();

// // Example route for getting to-do items
// router.get('/', getToDo);
// router.post('/save', saveToDo);



// module.exports = router;
const { Router } = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');  // Import both functions
const router = Router();

// Define routes
router.get('/', getToDo);  // Route to get all to-do items
router.post('/save', saveToDo); 
router.post('/update', updateToDo);
router.delete('/delete', deleteToDo);  // Use DELETE method here


module.exports = router;  // Export the router
