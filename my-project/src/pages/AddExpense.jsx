import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddExpense() {
  const [formData, setFormData] = useState({
    expensename: "",
    amount: "",
    date: "",
    description: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const editData = location.state;

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.expensename ||
      !formData.amount ||
      !formData.date ||
      !formData.description
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (formData.id) {
        await axios.put(
          `http://localhost:8080/expense-tracker/update-expense/${formData.id}`,
          formData
        );
        alert("Expense updated successfully");
      } else {
        await axios.post(
          "http://localhost:8080/expense-tracker/add-expense",
          formData
        );
        alert("Expense added successfully");
      }

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center flex-col py-10 gap-5 bg-gray-200">
      <div className=" rounded-md flex flex-col items-center bg-white border border-gray-400 p-5 gap-5">
        <h1 className="text-3xl font-bold">
          {formData.id ? "Update Expense" : "Add Expense"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-130">
          <div>
            <label>Expense Name:</label>
            <input
              className="border p-1 w-full"
              type="text"
              name="expensename"
              value={formData.expensename}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Amount:</label>
            <input
              className="border p-1 w-full"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Date:</label>
            <input
              className="border p-1 w-full"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Description:</label>
            <input
              className="border p-1 w-full"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 py-1 text-white mt-2"
          >
            {formData.id ? "Update Expense" : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}