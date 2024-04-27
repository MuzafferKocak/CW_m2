import React, { Children, createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const {Provider} =  createContext()
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null);
  const navigate = useNavigate();

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };
const logout =()=> setUser(null)
useEffect (()=> {
  sessionStorage.setItem("user", JSON.stringify(user))
})
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;