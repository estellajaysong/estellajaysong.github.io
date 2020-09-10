import React from 'react';
import Section from './Section';

const SKILLS = [
  'Python', 'JavaScript', 'Ruby', 'HTML', 'CSS', 'FastAPI', 'Flask', 'Node.js', 'Rails', 'Express',
  'Docker', 'React', 'Shopify', 'EJS', 'GraphQL', 'Bootstrap', 'SASS', 'Socket.IO', 'jQuery',
  'MongoDB', 'SQL', 'Git', 'Redis', 'pytest', 'RSpec', 'ActiveRecord',
];

export default () =>
  <Section title="Skills">
    <ul className="grid grid-flow-row grid-cols-4 md:grid-cols-6">
      {SKILLS.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
  </Section>;
