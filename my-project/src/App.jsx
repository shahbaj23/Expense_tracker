import React from "react";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./Components/Home";
import AddExpense from "./pages/AddExpense";
import ListExpense from "./pages/ListExpense";
import ProtectedRoute from "./protected/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/expense-list" element={<ListExpense />} />
      </Routes>
    </div>
  );
}
