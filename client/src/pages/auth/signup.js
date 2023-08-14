import { useState } from "react";
import useRequest from "../../hooks/use-request";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {doRequest, errors} = useRequest({
    url: "/api/users/signup",
    method:"post",
    body: {
      email,
      password,
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    doRequest()
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>sign up</h1>
      <div className="form-group">
        <label>email</label>
        <input
          type="email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>password</label>
        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
