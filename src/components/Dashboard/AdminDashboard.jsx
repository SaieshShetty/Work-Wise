import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks"; // Adjusted import for the updated AllTask component

const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex flex-col gap-8">
      {/* Header Section */}
      <header className="shadow-lg rounded-lg bg-gray-700 px-6 py-4">
        <Header changeUser={props.changeUser} />
      </header>

      {/* Create Task Section */}
      <section className="flex-shrink-0 shadow-md rounded-lg bg-gray-700 px-6 py-5">
        <CreateTask />
      </section>

      {/* All Tasks Section */}
      <main className="flex-grow shadow-inner rounded-lg bg-gray-800 px-6 py-5 overflow-auto">
        <AllTasks />
      </main>
    </div>
  );
};

export default AdminDashboard;
