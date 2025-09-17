import { ThemeButtons } from '@/components/settings/theme-buttons';

export function Settings() {
	return (
		<main className='flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='flex items-center'>
				<h1 className='text-lg font-semibold md:text-2xl'>Settings</h1>
			</div>

			<div className='relative flex-1 p-5 overflow-hidden border border-dashed rounded-lg shadow-sm'>
				<ThemeButtons />
			</div>
		</main>
	);
}
