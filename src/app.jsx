import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="landing-content">
        <Title text="IMAGINE A PLACE..." />
        <Paragraph text="...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often." />
        <div className="button-group">
          <Button text="Download for Mac" variant="primary" />
          <Button text="Open Discord in your browser" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default App;