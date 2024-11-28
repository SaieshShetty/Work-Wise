import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] p-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex-shrink-0">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-200">{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className="mt-5 text-lg font-semibold text-white">
        {data.taskTitle}
      </h2>

      {/* Task Description */}
      <p className="text-sm mt-3 text-gray-200 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Action Button */}
      <div className="mt-6">
        <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium text-xs rounded-lg transition-all duration-300">
          Mark as Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
