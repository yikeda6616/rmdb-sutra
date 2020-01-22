import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
  <header>
    <h1>Header</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </header>
);
