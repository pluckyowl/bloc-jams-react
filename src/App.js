import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
             <NavLink to='/' exact activeClassName="active" className="nav-link">Home</NavLink>
             <NavLink to='/library' activeClassName="active" className="nav-link">Library</NavLink>
           </nav>
           <h1 className="logo"><a href="/">Bloc Jams</a></h1>
         </header>
         <main>
           <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;
