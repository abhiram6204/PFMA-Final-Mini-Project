import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [latestGoal1, setLatestGoal1] = useState(0);
  const [latestGoal2, setLatestGoal2] = useState(0);
  const [investment1, setInvestment1] = useState([]);
  const [investment2, setInvestment2] = useState([]);

  const getIncome = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/income", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTotalIncome(
        response.data.income.reduce((total, income) => total + income.amount, 0)
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getIncome();
  }, []);

  const getExpense = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/expense", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const total = response.data.expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
      setTotalExpense(total);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    getExpense();
  }, []);

  const getLatestGoal = async () => {
    try {
        const response = await axios.get("http://localhost:3001/api/goal", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const goals = response.data.goals;
        if (goals.length > 0) {
            // Assuming the latest goal is the last one in the list
            setLatestGoal1(goals[goals.length - 1].currentAmount);
            setLatestGoal2(goals[goals.length - 1].targetAmount);
        }
    } catch (error) {
        console.error("Error fetching the goals:", error);
    }
};

useEffect(() => {
    getLatestGoal();
}, []);

const getInvestment = async () => {
  const response = await axios.get("http://localhost:3001/api/saving", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const investment = response.data.investments
  setInvestment1(investment[investment.length-1].amountInvested);
  setInvestment2(investment[investment.length-1].currentValue);
}
useEffect(() => {
  getInvestment();
}, []);


  return (
    <div className="dashboard">
      <div className="cardContainer">
        <div className="card">
          <h2>Total Income</h2>
          <p>${totalIncome}</p>
        </div>
        <div className="card">
          <h2>Total Expense</h2>
          <p>${totalExpense}</p>
        </div>
        <div className="card">
          <h2>My Goals</h2>
          <p>Current Amount: ${latestGoal1}</p>
          <p>Target Amount: ${latestGoal2}</p>
        </div>
        <div className="card">
          <h2>My Investment</h2>
          <p>Amount Invested: ${investment1}</p>
          <p>Current Investment: ${investment2}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
