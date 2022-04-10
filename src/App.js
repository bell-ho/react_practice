import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import axios from 'axios';
import News from './components/News';
import ColorBox from './components/ColorBox';
import ColorContext from "./contexts/color";
import Context from "./components/Context";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
        <li>
          <Link to="/news">뉴스 예제</Link>
        </li>
        <li>
          <Link to="/context">context 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/news" component={News} />
        <Route path="/context" component={Context} />

        <Route
          render={({ location }) => (
            <div>
              <h2>존재 x</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
