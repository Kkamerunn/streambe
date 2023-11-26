import { AlertProps } from "../interfaces";

const Alert = ({ type, textContent }: AlertProps) => {
  return (
    <div
      className={`${
        type === "error"
          ? "bg-red-500"
          : type === "success"
          ? "bg-green-500"
          : ""
      } text-white font-bold p-5 rounded-lg uppercase text-center my-8`}
    >
      <p>{textContent}</p>
    </div>
  );
};

export default Alert;
