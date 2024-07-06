import React, { useState } from "react";
import { login } from "./api/users";
import { useNavigate } from "react-router-dom";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
const navigate = useNavigate();

  const handleLogin = async () => {

    if (username === '' || password === '') {
      setErrorMessage("Username and password is required");
      setShowMessage(true); 
    } 
    
    else {
      const response = await login(username, password);
      
      if(response) {
       navigate('/inventory');
      }

      else {
        setErrorMessage('Invalid Username or password');
        
      }

      setShowMessage(true);
    }

  }

  return (
    <>
      <div className="w-screen h-screen bg-cyan-300 p-5 flex justify-center items-center">
        <div className="border-2 border-yellow-700 bg-white rounded m-5 p-5 w-[400px] h-[300px]">
          <div className="text-5xl text-center font-extrabold text-purple-700 hover:cursor-pointer">LOGIN</div>

          { 
          showMessage && (
            <div className={"m-2 text-center bg-red-200 rounded-sm text-red-700"}>
              { errorMessage }
            </div>
          )}

          <div className="flex gap-7 m-5">
            <div className="text-xl font-semibold text-gray-700">Username:</div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-full border border-purple-400" type="text" />
          </div>

          <div className="flex gap-7 m-5"> <div className="text-xl font-semibold text-gray-700">Password:</div>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-full border border-purple-400" type="password" />
          </div>

          <div className="flex justify-center">
            <button onClick={handleLogin} className="bg-purple-700 text-black p-3 rounded-full hover:bg-purple-500 hover:text-white"  >LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
