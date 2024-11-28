import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] p-5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg flex-shrink-0">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-800">{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className="mt-5 text-lg font-semibold text-gray-900">
        {data.taskTitle}
      </h2>

      {/* Task Description */}
      <p className="text-sm mt-3 text-gray-800 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Action Button */}
      <div className="mt-6">
        <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded-lg transition-all duration-300">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
