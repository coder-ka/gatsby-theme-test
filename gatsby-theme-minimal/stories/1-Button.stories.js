import React from 'react';
import "../src/styles/style.css"

import Button from '../src/components/button';

export default {
  title: 'Button',
  component: Button,
};

export const Theme = () => (
  <div className="p-10">
    <div className="p-10">
      <Button color="primary">Primary Button</Button>
      <br></br>
      <br></br>
      <Button color="secondary">Secondary Button</Button>
      <br></br>
      <br></br>
      <Button color="accent">Accent Button</Button>
      <br></br>
      <br></br>
      <Button color="muted">Muted Button</Button>
    </div>

    <div className="p-10 bg-gray-900">
      <span className="text-white">
        Dark mode
      </span>
      <br></br>
      <br></br>
      <Button color="primary" dark>Primary Button</Button>
      <br></br>
      <br></br>
      <Button color="secondary" dark>Secondary Button</Button>
      <br></br>
      <br></br>
      <Button color="accent" dark>Accent Button</Button>
      <br></br>
      <br></br>
      <Button color="muted" dark>Muted Button</Button>
    </div>
  </div>
)