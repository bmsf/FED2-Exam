'use client';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ImageSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='md:w-2/3 lg:w-1/4 mx-auto mt-10'>
			<AspectRatio ratio={16 / 9}>
				{venue.media.length > 0 ? (
					<Slider {...settings}>
						{venue.media.map((image, index) => (
							<Image
								key={index}
								height={1000}
								width={1000}
								className='object-cover h-full w-full'
								src={image}
								alt={`${venue.name} - ${index}`}
							/>
						))}
					</Slider>
				) : (
					<div className='flex items-center justify-center bg-gray-200 text-gray-500'>
						<span>No images available for this venue</span>
					</div>
				)}
			</AspectRatio>
		</div>
	);
};


export default ImageSlider;
