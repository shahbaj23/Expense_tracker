import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListExpense() {
  const [expenses, setExpenses] = useState([]);

  const navigate = useNavigate();

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/expense-tracker/get-expanse",
      );

      setExpenses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleUpdate = async (expense) => {
    navigate("/add-expense", { state: expense });
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-200">
      <div className="w-full rounded-md flex flex-col bg-white border border-gray-400 p-5 gap-5">
        <h1 className="text-3xl font-bold text-center">Expense List</h1>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <button
              onClick={() => handleUpdate(expense)}
              key={expense.id}
              className="p-3 rounded-md text-start"
            >
              <h2 className="text-2xl text-[#088318]">{expense.expensename}</h2>

              <p>
                Amount: <span>{expense.amount}</span>
              </p>
              <p>
                Date: <span>{expense.date}</span>
              </p>
              <hr className="w-full text-gray-300 mt-3" />
            </button>
          ))
        ) : (
          <p>Not data Found</p>
        )}
      </div>
    </div>
  );
}
