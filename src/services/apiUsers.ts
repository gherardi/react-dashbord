type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	website: string;
}

export async function getUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	if (data.error) {
		console.error(data.error);
		throw new Error('Users could not be loaded');
	}

	return data as User[];
}
