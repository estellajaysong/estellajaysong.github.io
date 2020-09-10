import React from 'react';
import ReactDOM from 'react-dom';

import Section from './components/Section';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Path from './components/Path';

const Portfolio = () =>
  <div className="max-w-screen-md md:mx-auto md:my-8 px-5 md:px-16 py-6 md:py-12 bg-white md:rounded shadow-2xl text-gray-900">
    <Header />

    <div className="mt-5 md:mt-8 space-y-8 md:space-y-10">
      <Summary />
      <Skills />
      <Projects />
      <Path />
    </div>
  </div>;

ReactDOM.render(<Portfolio />, document.getElementById('portfolio'));
