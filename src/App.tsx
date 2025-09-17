import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@/components/theme/theme-provider';
import router from '@/routes/router';

const queryClient = new QueryClient();

export default function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />

				<RouterProvider router={router} />
			</QueryClientProvider>
		</ThemeProvider>
	);
}
