import { Link } from 'react-router-dom';
import { CircleUser } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function UserAvatar() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon' className='rounded-full'>
					<Avatar>
						<AvatarImage
							src='https://github.com/gherardi.png'
							// src='https://github.com/shadcgasgsadn.png'
							alt='user avatar'
							className='object-cover'
						/>
						<AvatarFallback>
							<CircleUser className='w-5 h-5' />
						</AvatarFallback>
					</Avatar>
					<span className='sr-only'>Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link to='settings'>
					<DropdownMenuItem>Settings</DropdownMenuItem>
				</Link>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
