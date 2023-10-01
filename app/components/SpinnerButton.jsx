import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const SpinnerButton = ({ state, name, ...props }) => {
	return (
		<Button {...props}>
			{state ? (
				<Loader2 className='h-4 w-4 animate-spin' />
			) : (
				<span>{name}</span>
			)}
		</Button>
	);
};
