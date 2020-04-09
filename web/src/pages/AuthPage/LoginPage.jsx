import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AuthPage.scss";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { TextField } from "@material-ui/core";

function LoginPage({ history }) {
  const [isLoading, setIsLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.authToken ? history.push("/") : setIsLoading(false);
  }, [history]);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).catch((err) => {
      alert(err);
    });
    if (response.headers.get("authToken")) {
      localStorage.authToken = response.headers.get("authToken");
      history.push("/");
    } else {
      toast.error("Username/Password combination doesn't exist.");
      setUsername("");
      setPassword("");
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-form">
          <form onSubmit={submitForm}>
            <TextField
              required
              id="outlined"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ margin: "0px 10px 10px" }}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ margin: "0px 10px" }}
            />
            <button class="btn" type="submit">
              <span class="btn__content glitchBtn" data-text="Login">
                Login
              </span>
              <span class="btn__glitch"></span>
              <span class="btn__label">Inevitable</span>
            </button>
          </form>
          <Link to="/register">REGISTER</Link>
        </div>
      </div>
    </>
  );
}

export default withRouter(LoginPage);
