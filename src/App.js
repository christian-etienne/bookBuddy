// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookCollectionPage from './components/BookCollectionPage';
import BookDetailsModal from './components/BookDetailsModal';
import FavoriteBooksPage from './components/FavoriteBooksPage';
import ProfilePage from './components/ProfilePage';
import RewardPage from './components/RewardPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/books" component={BookCollectionPage} />
        <Route path="/favorites" component={FavoriteBooksPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/rewards" component={RewardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
      <BookDetailsModal />
    </Router>
  );
};

export default App;
