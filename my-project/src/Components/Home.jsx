import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        navigate("/login")
    }

  return (
    <div className='w-full h-screen flex items-center flex-col py-10 gap-5'>
        <div className='flex items-center flex-col gap-8'>
            <h1 className='text-3xl font-bold'>Welcome to expense tracker</h1>
            <div className='flex gap-4'>
                <Link to={"/add-expense"} className='text-green-500'>Add Expense</Link>
                <Link to={"/expense-list"} className='text-green-500'>ExpenseList</Link>
            </div>

            <div >
                <button className='bg-green-800 text-white p-2 cursor-pointer' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}
