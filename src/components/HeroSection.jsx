import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h4 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Welcome to <b><h1>ANTARIKSH</h1></b>
				</h4>
				<p className="text-md md:text-xl max-w-xl mb-3 text-gray-600 dark:text-gray-300">
					Astro Club is the club for incubating astronomical knowledge to the students who are interested to know what’s happening in the universe which is visible to known source of observatory. It is the initiative of ..... of ..... The objective is to inspire students and others to know more about the world around the Earth. Also, it is an effort to make social awareness about the facts and finding of the astronomy.
				</p>

				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					01000001 01001110 01010100 01000001 01010010 01001001 01001011 01010011 01001000
				</a>

			</div>
		</div>
	);
}

export default HeroSection;
