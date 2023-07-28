import React from 'react'
import { render } from "@testing-library/react";

import App from './App';

import { useSelector } from 'react-redux'
import { useGetLaunchesQuery } from "./services/api";

jest.mock('react-redux');
jest.mock('./services/api');


it('check app render', () => {

    useSelector.mockReturnValue([]);
    useGetLaunchesQuery.mockReturnValue([]);

    const app = render(<App />);

    expect(app).toMatchSnapshot();

});