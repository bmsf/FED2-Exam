'use client';
import * as React from 'react';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { User } from 'lucide-react';

const SelectInput = () => {
	return (
		<Select>
			<SelectTrigger className='bg-lightestPrimary border-none'>
				<div className='flex items-center justify-center text-center gap-2'>
					<User className='w-4' />
					<SelectValue placeholder='Number of guests' />
				</div>
			</SelectTrigger>
			<SelectContent className='bg-black'>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value='apple'>1</SelectItem>
					<SelectItem value='banana'>2</SelectItem>
					<SelectItem value='blueberry'>3</SelectItem>
					<SelectItem value='grapes'>4</SelectItem>
					<SelectItem value='pineapple'>5</SelectItem>
					<SelectItem value='pineapple'>6</SelectItem>
					<SelectItem value='pineapple'>7</SelectItem>
					<SelectItem value='pineapple'>8</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SelectInput;
