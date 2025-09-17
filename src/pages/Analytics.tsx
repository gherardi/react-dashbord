import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getCountries } from '@/services/apiCountries';

const continents = ['Europe', 'Asia', 'Africa', 'America', 'Oceania'] as const;
export type Continent = (typeof continents)[number];

export function Analytics() {
	const [activeContinent, setActiveContinent] = useState<Continent>('Europe');

	const { data, isLoading } = useQuery({
		queryKey: ['countries', activeContinent],
		queryFn: () => getCountries(activeContinent),
	});

	const handleTabChange = (value: Continent) => {
		setActiveContinent(value);
	};

	return (
		<main className='flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>Analytics</h1>
			</div>

			<Tabs
				defaultValue={activeContinent}
				value={activeContinent}
				onValueChange={(e) => handleTabChange(e as Continent)}
			>
				<TabsList>
					{continents.map((continent: Continent) => (
						<TabsTrigger key={continent} value={continent}>
							{continent}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>

			<div className='relative flex-1 overflow-hidden border border-dashed rounded-lg shadow-sm'>
				{isLoading ? <p>LOADING...</p> : null}

				<div className='absolute inset-0'>
					<ScrollArea className='w-full h-full'>
						{data?.map((country) => (
							<div key={country.name.common} className='p-2 hover:bg-muted/40'>
								{country.name.common}
							</div>
						))}
					</ScrollArea>
				</div>
			</div>
			<div className='text-sm text-muted-foreground'>
				Data fetched from{' '}
				<Button variant='link' className='p-0' asChild>
					<a
						href='https://restcountries.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						REST Countries
					</a>
				</Button>
			</div>
		</main>
	);
}
