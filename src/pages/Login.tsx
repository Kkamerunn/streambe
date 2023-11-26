import Form from "../components/Form";
import useAuth from "../hooks/useAuth";
import Alert from "./Alert";

const Login = () => {
  const { errors } = useAuth();

  return (
    <>
      <h1 className="font-black text-3xl text-center capitalize">Log in</h1>
      {errors && <Alert type="error" textContent={errors} />}
      <Form />
    </>
  );
};

export default Login;
