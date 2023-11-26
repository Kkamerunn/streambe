import { useState, FormEventHandler, ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import useAuth from "../hooks/useAuth";
import { AuthData } from "../interfaces";

const initialValues: AuthData = {
  email: "",
  password: "",
};

const Form = () => {
  const [form, setForm] = useState<AuthData>(initialValues);
  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof AuthData;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await login(form);
    setForm(initialValues);
    navigate("/dashboard");
  };

  return (
    <>
      <form
        className="mt-10 mb-5 bg-white shadow rounded-lg px-6 py-3"
        onSubmit={handleSubmit}
      >
        <div className="my-4">
          <label className="uppercase block text-xl font-bold" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            placeholder="Username"
            type="email"
            value={form.email}
            handleChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label
            className="uppercase block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={form.password}
            handleChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value={loading ? "Loading" : "Log in"}
          className={`${
            loading ? "backdrop-opacity-10" : ""
          } bg-red-600 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-red-500 transition-colors mb-4`}
        />
      </form>
    </>
  );
};

export default Form;
