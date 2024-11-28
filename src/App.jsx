import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUser, setloggedInUser] = useState(null)
  const [userData , setUserData] = useContext(AuthContext);

useEffect(() =>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setuser(userData.role)
    setloggedInUser(userData.data)
  }
})
  

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setuser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if(employee){
        setuser("employee");
        setloggedInUser(employee)
      }
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data : employee}))
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setuser} />}
      {user === "employee" && <EmployeeDashboard changeUser={setuser} data={loggedInUser}/>}
    </>
  );
};

export default App;
