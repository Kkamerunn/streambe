import { InputProps } from "../interfaces";

const Input = ({
  id,
  placeholder,
  handleChange,
  name,
  value,
  type,
}: InputProps) => {
  return (
    <input
      id={id}
      value={value}
      name={name}
      type={type}
      className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
