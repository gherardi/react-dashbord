import { createBrowserRouter } from 'react-router-dom';

import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

import Layout from '@/layouts/Layout';

const router = createBrowserRouter([
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'signup',
		element: <Signup />,
	},
	{
		path: '*',
		element: <Layout />,
		children: [
			{
				path: 'dashboard',
				// element: <Dashboard />,
				async lazy() {
					const { Dashboard } = await import('@/pages/Dashboard');
					return { Component: Dashboard };
				},
			},
			{
				path: 'orders',
				async lazy() {
					const { Orders } = await import('@/pages/Orders');
					return { Component: Orders };
				},
			},
			{
				path: 'products',
				async lazy() {
					const { Products } = await import('@/pages/Products');
					return { Component: Products };
				},
			},
			{
				path: 'customers',
				async lazy() {
					const { Customers } = await import('@/pages/Customers');
					return { Component: Customers };
				},
			},
			{
				path: 'analytics',
				async lazy() {
					const { Analytics } = await import('@/pages/Analytics');
					return { Component: Analytics };
				},
			},
			{
				path: 'settings',
				async lazy() {
					const { Settings } = await import('@/pages/Settings');
					return { Component: Settings };
				},
			},
		],
	},
]);

export default router;
