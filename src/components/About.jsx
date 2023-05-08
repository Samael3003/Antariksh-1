import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>Important Dates :</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					<b>24-February-2022</b> : Guest Lecture by Prof. Dr. Helen Mason
				</p>
				<p className="text-md text-gray-600 dark:text-gray-300">
					<b>26-February-2022</b> : IUCAA Science Day
				</p>
				<p className="text-md text-gray-600 dark:text-gray-300">
					<b>24-March-2022</b> : Solar Observation and Lunar Occulation of Venus
				</p>
				<p className="text-md text-gray-600 dark:text-gray-300">
					<b>29-March-2022</b> : Star Gazing and Star Party
				</p>

				<a
					href="http://peakyprogrammer.me/"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					peakyprogrammer.me
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
