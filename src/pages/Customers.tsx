import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getUsers } from '@/services/apiUsers';

export function Customers() {
	const { data, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
	});

	return (
		<main className='flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>Customers</h1>
			</div>

			<div className='relative flex-1 overflow-hidden border border-dashed rounded-lg shadow-sm'>
				{isLoading ? <p>LOADING...</p> : null}

				<div className='absolute inset-0'>
					<ScrollArea className='w-full h-full [&>:nth-child(1)]:[&>:nth-child(2)]:divide-y-2 [&>:nth-child(1)]:[&>:nth-child(2)]:divide-muted'>
						{data?.map((user) => (
							<div key={user.id} className='p-4 hover:bg-muted/40'>
								<div className='font-semibold'>{user.name}</div>
								<div className='pb-1 text-sm text-muted-foreground'>
									@{user.username}
								</div>
								<a
									href={user.website}
									target='_blank'
									className='inline-block text-sm hover:underline'
								>
									{user.website}
								</a>
							</div>
						))}
					</ScrollArea>
				</div>
			</div>

			<div className='text-sm text-muted-foreground'>
				Data fetched from{' '}
				<Button variant='link' className='p-0' asChild>
					<a
						href='https://jsonplaceholder.typicode.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						JSONPlaceholder
					</a>
				</Button>
			</div>
		</main>
	);
}
