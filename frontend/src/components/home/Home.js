import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <main className="main">
        <section className="hero">
          <h2 className="hero-title">Take Control of Your Finances</h2>
          <p className="hero-description">Our personal finance app helps you track your income, expenses, and investments.</p>
        </section>

        <section className="features">
          <h2 className="features-title">Key Features</h2>
          <ul className="features-list">
            <li className="feature-item">
              <Link to="/dashboard">
                <h3 className="feature-title">View Dashboard</h3>
                <p className="feature-description">Get a quick overview of your financial status.</p>
              </Link>
            </li>
            <li className="feature-item">
              <Link to="/income">
                <h3 className="feature-title">View Income</h3>
                <p className="feature-description">Record and categorize your income.</p>
              </Link>
            </li>
            <li className="feature-item">
              <Link to="/budget">
                <h3 className="feature-title">View Budgets</h3>
                <p className="feature-description">Create and manage your monthly budgets.</p>
              </Link>
            </li>
            <li className="feature-item">
              <Link to="/goal">
                <h3 className="feature-title">View Goals</h3>
                <p className="feature-description">Set financial goals and track your progress.</p>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
