import React from 'react';
import * as Icons from './icons';
import Section from './Section';

const PathItem = ({ children, title, dateString, Icon }) =>
  <li>
    <div className="flex">
      <span className="flex-1 mb-1 flex items-center font-medium text-purple-800">
        <Icon className="w-4 mr-2" />
        {title}
      </span>
      <span className="flex-none text-gray-500">
        {dateString}
      </span>
    </div>
    <div>
      {children}
    </div>
  </li>;

export default () =>
  <Section title="Path">
    <ul className="space-y-4 md:space-y-6">
      <PathItem
        title="Satel Creative - Back End Developer"
        dateString="2019 - Present"
        Icon={Icons.Briefcase}
      >
        <ul className="md:list-disc md:ml-5 space-y-2 md:space-y-1">
          <li>
            Designed and implemented features for product inventory management systems for
            industry-leading e-commerce conglomerates
          </li>
          <li>
            Built and scaled near-realtime integrations and migrations of millions of resources
            between Shopify, ShipHero, BigQuery, and various fulfillment APIs
          </li>
          <li>
            Within the Shopify ecosystem, crafted REST and GraphQL APIs for our clients, wrote cart
            scripts and reporting scripts
          </li>
        </ul>
      </PathItem>

      <PathItem
        title="Lighthouse Labs"
        dateString="2019"
        Icon={Icons.AcademicCap}
      >
        Completed full-time web development bootcamp
      </PathItem>

      <PathItem
        title="Charest Reporting - Court Reporter"
        dateString="2017 - 2019"
        Icon={Icons.Briefcase}
      >
        <ul className="md:list-disc md:ml-5 space-y-2 md:space-y-1">
          <li>
            Transcribed legal proceedings and hearings verbatim as a self-employed contractor
          </li>
          <li>
            Created my own workflow and allocated work to subcontractors to maximize productivity
          </li>
        </ul>
      </PathItem>

      <PathItem
        title="Northern Alberta Institute of Technology"
        dateString="2015 - 2017"
        Icon={Icons.AcademicCap}
      >
        Obtained a Captioning and Court Reporting diploma with a graduating speed of 225 WPM on a
        stenograph and two new grey hairs
      </PathItem>

      <PathItem
        title="Bell Canada - Sales Consultant"
        dateString="2015 - 2017"
        Icon={Icons.Briefcase}
      >
        <ul className="md:list-disc md:ml-5 space-y-2 md:space-y-1">
          <li>
            Consulted with clients on their needs and wants, then matched them with appropriate
            plans and hardware
          </li>
        </ul>
      </PathItem>
    </ul>
  </Section>;
