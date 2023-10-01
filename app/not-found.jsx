import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-xl gap-6 flex flex-col justify-center items-center min-h-screen mt-[-60px]'>
			<h2>Not Found😢</h2>
			<p>This page does not exist</p>
			<Button>
				<Link href={'/'}>Home</Link>
			</Button>
		</div>
	);
}
