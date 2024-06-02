import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/users" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
