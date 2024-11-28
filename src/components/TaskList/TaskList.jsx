import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] w-full overflow-x-auto flex items-center gap-6 py-3 mt-16 px-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg"
    >
      {data.tasks.map((elem, idx) => {
        // Dynamically rendering task cards based on status
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
