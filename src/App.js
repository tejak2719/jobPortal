import React from 'react';
import Header from './components/Header';
import './styles.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero-section">
        <div className="text-block">
          <h1>Dream Career</h1>
          <h2>Discover your perfect job match and leap into a world of endless opportunities</h2>
          <a href="#get-started" className="get-started-button">Get Started</a>
        </div>
      </section>

      <section className="subscription-section">
        <h2 className="subscription-header">Choose Wisely</h2>
        <div className="subscription-plans">
          <div className="plan">
            <div className="plan-header">Basic</div>
            <div className="plan-price">$9.99/month</div>
            <p className="plan-details">Start your job hunt with essential features.</p>
            <button className="plan-button">Select</button>
          </div>
          <div className="plan">
            <div className="plan-header">Pro</div>
            <div className="plan-price">$19.99/month</div>
            <p className="plan-details">Unlock advanced job search and application tools.</p>
            <button className="plan-button">Select</button>
          </div>
          <div className="plan">
            <div className="plan-header">Premium</div>
            <div className="plan-price">$29.99/month</div>
            <p className="plan-details">Access exclusive job listings and priority support.</p>
            <button className="plan-button">Select</button>
          </div>
          <div className="plan">
            <div className="plan-header">Ultimate</div>
            <div className="plan-price">$49.99/month</div>
            <p className="plan-details">Get VIP treatment with personalized job recommendations and career guidance.</p>
            <button className="plan-button">Select</button>
          </div>
        </div>
      </section>

      {/* Other sections of your single page website */}
    </div>
  );
}

export default App;