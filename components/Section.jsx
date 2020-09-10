import React from 'react';

export default ({ title, children }) =>
  <div>
    <h2 className="mb-3 md:mb-2 text-lg md:text-2xl font-medium">
      {title}
    </h2>
    <div className="text-sm md:text-base">
      {children}
    </div>
  </div>;
