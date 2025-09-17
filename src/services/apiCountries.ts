import { type Continent } from '@/pages/Analytics';

type Country = {
	name: {
		common: string;
		official: string;
	};
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	capital: string[];
	languages: {
		[key: string]: string;
	};
	latlng: string[];
	population: number;
};

export async function getCountries(continent: Continent = 'Europe') {
	const response = await fetch(
		`https://restcountries.com/v3.1/region/${continent.toLowerCase()}?fields=name,capital,population,currencies,languages,latlng`
	);
	const data = await response.json();

	if (data.error) {
		console.error(data.error);
		throw new Error('Countries could not be loaded');
	}

	return data as Country[];
}
