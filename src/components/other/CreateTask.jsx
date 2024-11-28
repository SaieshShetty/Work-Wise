import React, { useState,useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setuserData] = useContext(AuthContext)

  const [tasktitle, settasktitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newtask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      tasktitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData ;
    

    data.forEach(function (elem) {
      if (assignTo === elem.firstname) {
        elem.tasks.push(newtask);
        elem.taskSummary.newTask = elem.taskSummary.newTask + 1
      }
    })
    setuserData(data)
    console.log(data);

    settasktitle("");
    setcategory("");
    setassignTo("");
    settaskDate("");
    settaskDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8 px-5">
      <div className="container mx-auto max-w-3xl bg-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-emerald-400 mb-6">
          Create a New Task
        </h2>
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label
                htmlFor="tasktitle"
                className="text-sm font-medium text-gray-300 mb-1 block"
              >
                Task Title
              </label>
              <input
                id="tasktitle"
                value={tasktitle}
                onChange={(e) => settasktitle(e.target.value)}
                className="w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-emerald-500"
                type="text"
                placeholder="Make a UI design"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="taskDate"
                className="text-sm font-medium text-gray-300 mb-1 block"
              >
                Date
              </label>
              <input
                id="taskDate"
                value={taskDate}
                onChange={(e) => settaskDate(e.target.value)}
                className="w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-emerald-500"
                type="date"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="assignTo"
                className="text-sm font-medium text-gray-300 mb-1 block"
              >
                Assign To
              </label>
              <input
                id="assignTo"
                value={assignTo}
                onChange={(e) => setassignTo(e.target.value)}
                className="w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-emerald-500"
                type="text"
                placeholder="Employee name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-300 mb-1 block"
              >
                Category
              </label>
              <input
                id="category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-emerald-500"
                type="text"
                placeholder="Design, Development, etc."
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <label
                htmlFor="taskDescription"
                className="text-sm font-medium text-gray-300 mb-1 block"
              >
                Description
              </label>
              <textarea
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => settaskDescription(e.target.value)}
                className="w-full h-40 py-2 px-4 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-emerald-500"
                placeholder="Provide task details here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 bg-emerald-500 rounded-lg text-white font-semibold hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 transition-all duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
