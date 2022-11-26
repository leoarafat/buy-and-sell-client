import React from 'react';
import { Link } from 'react-router-dom';

const DiscountPage = () => {
    return (
        <div>
           <div className="p-6 py-12 bg-purple-400 w-[800px] mx-auto ">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<p className="sm:hidden">50% Off/</p>
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">ARAFAT</span>
			</div>
			<Link to="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:border-gray-400 font-semibold">Shop Now</Link>
		</div>
	</div>
</div> 
        </div>
    );
};

export default DiscountPage;