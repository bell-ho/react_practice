import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import Categories from './Categories';
import NewsPage from '../pages/NewsPage';
import { Route } from 'react-router-dom';

const News = () => {

  return <Route path="/news/:category?" component={NewsPage} />;
};

export default News;
