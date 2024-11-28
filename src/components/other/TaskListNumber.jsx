import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {/* Active Task */}
      <div className="bg-red-500 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">{data.taskSummary.active}</h2>
        <h3 className="text-lg font-medium text-white mt-2">Active Tasks</h3>
      </div>

      {/* New Task */}
      <div className="bg-blue-500 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">{data.taskSummary.newTask}</h2>
        <h3 className="text-lg font-medium text-white mt-2">New Tasks</h3>
      </div>

      {/* Completed Task */}
      <div className="bg-yellow-400 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-4xl font-bold text-black">{data.taskSummary.completed}</h2>
        <h3 className="text-lg font-medium text-black mt-2">Completed Tasks</h3>
      </div>

      {/* Failed Task */}
      <div className="bg-green-500 p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">{data.taskSummary.failed}</h2>
        <h3 className="text-lg font-medium text-white mt-2">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
