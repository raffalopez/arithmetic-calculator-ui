import React, { useState } from "react";
import { newOperation } from "../../api/operation";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface INewOperationFormProps {
  balance: number;
  setBalance: (balance: number) => void;
}

const NewOperationForm = ({ balance, setBalance }: INewOperationFormProps) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("addition");
  const [cost, setCost] = useState(100);
  const navigate = useNavigate();

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(event.target.value);
  };

  const handleOperationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOperation(event.target.value);
    switch (event.target.value) {
      case "addition":
      case "subtraction":
        setCost(100);
        break;
      case "multiplication":
      case "division":
        setCost(200);
        break;
      case "square_root":
      case "random_string":
        setCost(300);
        break;
      default:
        setCost(0);
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newData = {
      numberA: num1,
      numberB: num2,
      cost,
      type: operation,
    };
    try {
      const response = await newOperation.NewOperation("/operations", newData);
      if (response.error) {
        throw new Error(response.message);
      }
      if (response) {
        Swal.fire(`The answer is ${response?.operationResponse}`).then(
          (result) => {
            if (result.isConfirmed) {
              setBalance(cost);
              navigate("/balance");
            }
          }
        );
      }
    } catch (error) {
      if (error) {
        Swal.fire(`${error}`, "", "error");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between sm:gap-x-2">
        <p className="block text-gray-700 font-bold mb-2">
          Total credit: {balance}
        </p>
        <button
          onClick={() => navigate("/balance")}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline"
        >
          Balance
        </button>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="operation"
        >
          Operation
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="operation"
          value={operation}
          onChange={handleOperationChange}
        >
          <option value="addition">Addition (+)</option>
          <option value="subtraction">Subtraction (-)</option>
          <option value="multiplication">Multiplication (*)</option>
          <option value="division">Division (/)</option>
          <option value="square_root">Square Root (√)</option>
          <option value="random_string">Random String (rand)</option>
        </select>
      </div>
      {operation !== "random_string" && (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="num1">
            Number 1
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="num1"
            type="number"
            placeholder="Enter number 1"
            value={num1}
            onChange={handleNum1Change}
          />
        </div>
      )}
      {operation !== "square_root" && operation !== "random_string" && (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="num2">
            Number 2
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="num2"
            type="number"
            placeholder="Enter number 2"
            value={num2}
            onChange={handleNum2Change}
          />
        </div>
      )}
      <div className="mb-4">
        <p className="block text-gray-700 font-bold mb-2">
          Request cost: {cost} credit(s)
        </p>
      </div>
      <div className="mb-4">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewOperationForm;
