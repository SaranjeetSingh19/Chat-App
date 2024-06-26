import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-gray-500 font-semibold text-center mb-6 text-2xl">
          Login <span className="text-blue-400">BossChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-gray-700 font-semibold text-lg label-text">
                {" "}
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-700 font-semibold text-lg label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm  text-gray-700 font-semibold hover:underline hover:text-blue-500 mt-4 ml-1 inline-block"
          >
            Don't have an account?
          </Link>

          <button className="btn btn-block btn-sm mt-4 bg-blue-300 text-blue-800   hover:text-gray-400">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
