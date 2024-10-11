import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner2 } from "react-icons/im";
import "nprogress/nprogress.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
    // validate
    const isValidEmmail = validateEmail(email);
    if (!isValidEmmail) {
      toast.error("invalid email");
      return;
    }
    if (!password) {
      toast.error("invalid password");
      return;
    }
    setIsLoading(true);
    // submit APIs
    let data = await postLogin(email, password);
    if (data && +data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };
  const handleKeyDown = (event) => {
    console.log("event key:", event.key);
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button onClick={() => navigate("/register")}>Sign up</button>
      </div>
      <div className="title col-3 mx-auto">TYPE FORM</div>
      <div className="welcom col-3 mx-auto">Hello, who’s this?</div>
      <div className="content-form col-3 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button
            disabled={isLoading}
            className="btn-submit"
            onClick={() => handleLogin()}
          >
            {isLoading === true && <ImSpinner2 className="loaderIcon" />}
            <span>Login to hoidanit</span>
          </button>
        </div>
        <div className=" text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            &lt;&lt; go back home
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
