import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black h-full flex flex-col gap-8">
      {/* Header Section */}
      <header className="shadow-lg rounded-lg bg-gray-700 px-6 py-4">
        <Header changeUser={props.changeUser} data={props.data} />
      </header>

      {/* Task List Number Section */}
      <section className="flex-shrink-0 shadow-md rounded-lg bg-gray-700 px-5 py-4">
        <TaskListNumber data={props.data} />
      </section>

      {/* Task List Section */}
      <main className="flex-grow shadow-inner rounded-lg bg-gray-800 px-5 py-4 overflow-auto">
        <TaskList data={props.data} />
      </main>
    </div>
  );
};

export default EmployeeDashboard;
