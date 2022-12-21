import React from 'react';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import NavAnim from '../../../Animation/Coding.json'
const Contact = () => {


const handleSubmit = e =>{
	e.preventDefault()
	const form = e.target 
	const name = form.name.value 
	const email = form.email.value 
	const message = form.message.value 

	const information = {
		name,
		email,
		message
	}
	fetch('http://localhost:5000/message',{
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(information)
	})
	.then(res => res.json())
	.then(data =>{
		console.log(data)
		if (data.acknowledged) {
			toast.success("Message Send successful");
		  }
		
	})
}


    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-slate-100 text-black">
	<div className="flex flex-col justify-between">
		<div className="space-y-2 ">
			<h2 className="text-4xl font-bold text-black leading-tight lg:text-5xl">Contact Me</h2>
			<Lottie className='lg:w-[350px] h-[350px]' animationData={NavAnim}></Lottie>
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form onSubmit={handleSubmit}  className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded bg-gray-300" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" name='email' type="email" className="w-full p-3 rounded bg-gray-300" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea name='message' id="message" rows="3" className="w-full p-3 rounded text-black bg-gray-300"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;