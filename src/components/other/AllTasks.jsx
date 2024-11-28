import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setuserData] = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5">
      <div className="container mx-auto">
        <div className="bg-gray-700 rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 text-center py-3 border-b border-gray-600">
            <h2 className="text-lg font-bold uppercase text-gray-300">Employee Name</h2>
            <h3 className="text-lg font-bold uppercase text-gray-300">New Task</h3>
            <h5 className="text-lg font-bold uppercase text-gray-300">Active Task</h5>
            <h5 className="text-lg font-bold uppercase text-gray-300">Completed</h5>
            <h5 className="text-lg font-bold uppercase text-gray-300">Failed</h5>
          </div>

          {/* Employee Data */}
          <div className="divide-y divide-gray-600">
            {userData.map((elem, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 gap-4 text-center py-4 hover:bg-gray-800 rounded-md transition-all duration-200"
              >
                <h2 className="text-lg font-medium text-gray-200">{elem.firstname}</h2>
                <h3 className="text-lg font-medium text-blue-400">{elem.taskSummary.newTask}</h3>
                <h5 className="text-lg font-medium text-yellow-400">{elem.taskSummary.active}</h5>
                <h5 className="text-lg font-medium text-green-400">{elem.taskSummary.completed}</h5>
                <h5 className="text-lg font-medium text-red-500">{elem.taskSummary.failed}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
