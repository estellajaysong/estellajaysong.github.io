import React from 'react';
import * as Icons from './icons';

const WhereabootStella = ({ Icon, text, href }) =>
  <a href={href} className="flex items-center">
    <Icon className="w-4 mr-2" />
    {text}
  </a>;

export default () =>
  <div className="flex">
    <div className="flex-1">
      <h1 className="m-0 font-serif font-bold text-3xl md:text-4xl leading-none md:leading-normal text-purple-900">
        Estella Song
      </h1>
      <span className="text-normal md:text-lg text-gray-500">
        Web Developer
      </span>
    </div>

    <ul className="flex-none text-xs md:text-sm">
      <WhereabootStella
        Icon={Icons.Phone}
        text="778-928-7664"
        href="tel:17789287664"
      />
      
      <WhereabootStella
        Icon={Icons.Inbox}
        text="estellajaysong@gmail.com"
        href="mailto:estellajaysong@gmail.com"
      />
      
      <WhereabootStella
        Icon={Icons.LinkedIn}
        text="Estella Song"
        href="https://www.linkedin.com/in/estella-song-b50372a7/"
      />
      
      <WhereabootStella
        Icon={Icons.GitHub}
        text="estellajaysong"
        href="https://github.com/estellajaysong"
      />
    </ul>
  </div>;
