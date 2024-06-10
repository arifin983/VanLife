import React from "react";
import {
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";
export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};
export const action = async ({ request }) => {
  // console.log("action function run")
 const pathname = new URL(request.url).searchParams.get("redirectTo")||"/";
 //console.log(pathname);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("email: ", email, " password: ", password);
  try {
    const result = await loginUser({ email, password });
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    return redirect(pathname);
  } catch (error) {
    return error;
  }
};

const Login = () => {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();
  //console.log(navigation)

  // const [loginFormData, setLoginFormData] = React.useState({
  //   email: "",
  //   password: "",
  // });
  // const [status, setStatus] = React.useState("idle");
  // const [error, setError] = React.useState(null);
  // const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //console.log(loginFormData)
  // const { email, password } = loginFormData;
  // //console.log(email,password)
  // let result = await fetch("http://localhost:5000/addUser", {
  //   method: "post",
  //   body: JSON.stringify({email,password}),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // result = await result.json();
  // console.warn(result);
  // setStatus("submitting");
  // setError(null)
  // try {
  //   const result = await loginUser(loginFormData);
  //   console.log(result);
  //   localStorage.setItem("user", JSON.stringify(result.result));
  //   localStorage.setItem("token", JSON.stringify(result.auth));
  //   navigate("/");
  // } catch (err) {
  //   console.log(err);
  //   setError(err)
  // } finally {
  //   setStatus("idle");
  // }

  // setLoginFormData({
  //     email: "",
  //     password: "",
  //   });
  //navigate("/");
  // };

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  return (
    <div className="login-container">
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <h1>Sign in to your account</h1>
      {/* <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button
          type="submit"
          disabled={
            status === "submitting" //||
           // !loginFormData.email ||
           // !loginFormData.password
          }
        >
          {status === "submitting" ? "Logging..." : "Login"}
        </button>
      </form> */}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging" : "Login"}
        </button>
      </Form>
    </div>
  );
};
export default Login;
