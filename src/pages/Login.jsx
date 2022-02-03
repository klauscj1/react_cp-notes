import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigator = useNavigate();
  const userData = localStorage.getItem("token");
  useEffect(() => {
    if (userData != null) {
      navigator("/");
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("token", "123345");
          navigator("/");
        }}
      >
        Login
      </button>
    </div>
  );
};
