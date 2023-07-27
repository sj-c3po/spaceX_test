import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App';

it('Have "Loading..."', async () => {

    render(<App />)
  
    const loadingElem = screen.getByText('Loading...');
    expect(loadingElem).toBe(<div>Loading...</div>);
  })

it('runs the first test', () => {
    expect(true).toBe(true);
  });

  