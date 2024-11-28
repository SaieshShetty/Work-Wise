localStorage.clear()

const employees = [
  {
    id: "E001",
    firstname: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Report",
        taskDescription: "Prepare the monthly performance report.",
        taskDate: "2024-11-20",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-11-21",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review the code changes for the new feature.",
        taskDate: "2024-11-22",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: 3,
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: "E002",
    firstname: "Aditi",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update Documentation",
        taskDescription: "Update the project documentation.",
        taskDate: "2024-11-20",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Call",
        taskDescription: "Discuss requirements with the client.",
        taskDate: "2024-11-21",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: 2,
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: "E003",
    firstname: "Vikram",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Bug Fix",
        taskDescription: "Fix the reported issue in module X.",
        taskDate: "2024-11-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Presentation Prep",
        taskDescription: "Prepare slides for the upcoming presentation.",
        taskDate: "2024-11-23",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: 2,
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: "E004",
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Research Topic A",
        taskDescription: "Conduct research on Topic A.",
        taskDate: "2024-11-20",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Discussion",
        taskDescription: "Lead the discussion on project progress.",
        taskDate: "2024-11-22",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: 2,
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: "E005",
    firstname: "Neha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "System Testing",
        taskDescription: "Perform system testing for the new release.",
        taskDate: "2024-11-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Error Logs Analysis",
        taskDescription: "Analyze and document error logs.",
        taskDate: "2024-11-21",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: 2,
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];

const admin = [
  {
    id: "A001",
    firstname: "Arjun",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) ;
  const admin = JSON.parse(localStorage.getItem('admin')) ;

  return {employees,admin} 
}