import React from 'react';

export const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ className = '', children }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ className = '', children }) => (
  <h2 className={`text-h4 ${className}`}>
    {children}
  </h2>
);

export const CardContent = ({ className = '', children }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);