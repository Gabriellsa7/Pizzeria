import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login setToken={setToken} />} />
        {token ? (
          <Route path={"/homepage"} element={<Home token={token} />} />
        ) : (
          ""
        )}
      </Routes>

      <Outlet />
    </>
  );
}

export default App;
