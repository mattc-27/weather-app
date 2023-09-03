import React from 'react';
import Layout from './components/Layout';
import Dashboard from './Dashboard';
//import Dashboard from './Dashboard';
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';

// stylesheet
import './style.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    }])

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}