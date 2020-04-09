import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./AuthPage.scss";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";

function RegisterPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? history.push("/") : setIsLoading(false);
  }, [history]);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/register", {
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
    response = await response.text();
    if (response === "Success") {
      toast.success("Registration Successful");
      history.push("/login");
    } else {
      toast.error(response);
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
              <span
                class="btn__content glitchBtn"
                data-text="Register"
                style={{ "font-size": "1.2em", margin: "auto" }}
              >
                Register
              </span>
              <span class="btn__glitch"></span>
              <span class="btn__label">Inevitable</span>
            </button>
          </form>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default withRouter(RegisterPage);
