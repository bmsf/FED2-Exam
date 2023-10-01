import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer';
import './globals.css';
import Provider from './components/Provider';

import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
	title: 'Holidaze - Premier Accommodations & Vacation Rentals',
	description:
		'Discover premium accommodations with Holidaze. Find the perfect stay for your vacation, from luxury suites to cozy vacation rentals. Book now for exclusive deals!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${rubik.className} flex flex-col justify-between min-h-screen bg-primary text-[#f5f5f5]`}
			>
				<Provider>
					<Navbar />
					{children}
					<ToastContainer
						position='top-center'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='dark'
					/>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
