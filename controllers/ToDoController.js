const ToDoModel = require('../models/ToDoModel');
const ToDo = require('../models/ToDoModel')


// Export the controller functions
module.exports.getToDo = async(req,res) => {
  const toDo = await ToDoModel.find()
  res.send(toDo)

}

// module.exports.saveToDo = async(req,res) => {

//     const { text } = req.body

//     ToDoModel
//         .create({text})
//         .then((data) => {
//             console.log("Added Successfully...");
//             console.log(data);
//             res.send(data)
//         })
// }

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
  
    try {
      const newToDo = await ToDoModel.create({ text });  // Create a new ToDo item
      console.log('Added Successfully...');
      console.log(newToDo);
      res.send(newToDo);  // Send the newly created ToDo item back in the response
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving the to-do');
    }}

module.exports.updateToDo = async (req,res) => {
    const{_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated successfully..."))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;  // Using body to pass the ID

    try {
        const deletedToDo = await ToDoModel.findByIdAndDelete(_id);
        if (deletedToDo) {
            res.status(200).send("Deleted successfully...");
        } else {
            res.status(404).send("ToDo item not found.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting ToDo item.");
    }
};

