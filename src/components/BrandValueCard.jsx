import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';

export const BrandValueCard = ({ title, description }) => (
  <Card>
    <CardHeader>
      <h3 className="text-h4 text-primary">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-body text-gray-600">{description}</p>
    </CardContent>
  </Card>
); 