import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import { WeatherProvider } from './WeatherContext';
import Layout from './Layout';

import './style.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

    }]);

export default function App() {

    return (
        <WeatherProvider>
            <RouterProvider router={router} />
        </WeatherProvider>
    );
}