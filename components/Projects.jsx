import React from 'react';
import Section from './Section';

const Project = ({ name, dateString, description, tech, href }) =>
  <li className="flex flex-col md:flex-row leading-snug">
    <div className="md:flex-none flex md:block items-center">
      <a href={href} className="flex-1 md:block font-medium text-purple-800">
        {name}
      </a>
      <span className="flex-1 text-xs md:text-sm text-right md:text-left text-gray-500">
        {dateString}
      </span>
    </div>

    <div className="md:flex-1 md:text-right">
      <span className="block">
        {description}
      </span>
      <span className="text-xs md:text-sm text-purple-600">
        {tech.join(', ')}
      </span>
    </div>
  </li>;

export default () =>
  <Section title="Projects">
    <ul className="space-y-3">
      <Project
        name="Latercart"
        dateString="May, 2019"
        description="A Chrome extension and web app where users can create and share wishlists"
        tech={['Node.js', 'React', 'Ruby on Rails', 'PostgreSQL', 'Material-UI', 'jQuery']}
        href="https://github.com/estellajaysong/latercart"
      />

      <Project
        name="Jungle"
        dateString="April, 2019"
        description="A mini e-commerce application built with Rails 4.2"
        tech={['Ruby on Rails', 'PostgreSQL']}
        href="https://github.com/estellajaysong/jungle-rails"
      />

      <Project
        name="Chatty App"
        dateString="April, 2019"
        description="A client-side chatroom SPA built with ReactJS"
        tech={['Webpack', 'Babel', 'JSX', 'ES6', 'WebSockets', 'React.js']}
        href="https://github.com/estellajaysong/chatty-app"
      />

      <Project
        name="Mapbook"
        dateString="March, 2019"
        description="A web app where users can create and share maps"
        tech={['Node.js', 'Ajax', 'Express', 'Knex', 'jQuery', 'Bootstrap', 'Sass', 'SQL']}
        href="https://github.com/estellajaysong/MidPro_WikiMap"
      />

      <Project
        name="Tweeter"
        dateString="March, 2019"
        description="A simplified single-page Twitter mock"
        tech={['JS', 'jQuery', 'AJAX', 'Node.js', 'Express', 'MongoDB']}
        href="https://github.com/estellajaysong/tweeter"
      />

      <Project
        name="TinyApp"
        dateString="March, 2019"
        description="A URL-shortening web app"
        tech={['Node.js', 'Express']}
        href="https://github.com/estellajaysong/tinyApp"
      />
    </ul>
  </Section>;
