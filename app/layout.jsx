import Navbar from './Navbar';
import Footer from './Footer';
import './globals.css';
import { Inter, Open_Sans, Playfair_Display } from 'next/font/google';

export const playfair = Playfair_Display({
	subsets: ['latin'],
});
const openSans = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Holidaze - Premier Accommodations & Vacation Rentals',
	description:
		'Discover premium accommodations with Holidaze. Find the perfect stay for your vacation, from luxury suites to cozy vacation rentals. Book now for exclusive deals!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${openSans.className} bg-primary text-[#f5f5f5]`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
