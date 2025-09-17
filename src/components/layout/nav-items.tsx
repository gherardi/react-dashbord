import {
	Home,
	ShoppingCart,
	Package,
	Users,
	LineChart,
	Settings,
} from 'lucide-react';

export const navItems = [
	{
		name: 'Dashboard',
		icon: <Home className='w-4 h-4' />,
		path: '/dashboard',
	},
	{
		name: 'Orders',
		icon: <ShoppingCart className='w-4 h-4' />,
		path: '/orders',
	},
	{
		name: 'Products',
		icon: <Package className='w-4 h-4' />,
		path: '/products',
	},
	{
		name: 'Customers',
		icon: <Users className='w-4 h-4' />,
		path: '/customers',
	},
	{
		name: 'Analytics',
		icon: <LineChart className='w-4 h-4' />,
		path: '/analytics',
	},
	{
		name: 'Settings',
		icon: <Settings className='w-4 h-4' />,
		path: '/settings',
	},
];
