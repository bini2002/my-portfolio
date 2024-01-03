import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactMe = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        message: '',
    })

    const handleChange = (event) => {
        setFormData({
        ...formData, 
        [event.target.id]:  event.target.value
        });
        }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        
        if (response.status === 201) {
                console.log('Form data submitted successfully');
                toast.success('Form data submitted successfully');

                // Handle success - e.g., display a success message to the user
            } else {
                toast.error('Error submitting form data');
                console.error('Error submitting form data');
                // Handle error - e.g., display an error message to the user
            }
        } catch (error) {
            toast.error('Error submitting form data');
            console.error('Error submitting form data', error);
            // Handle network-related errors
        }
        
        

}

    return (
        <section id="contact" className="bg-white py-16 lg:py-20 px-8 lg:px-16">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 pl-8">Contact Me</h2>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <p className="text-lg lg:text-xl">
                            Feel free to drop me a message using the form. I'll get back to you as soon as possible!
                        </p>
                        <img src='/contact.png' alt='illustration' />
                        <div className="flex justify-center lg:justify-start mt-4 space-x-4">
                            <a href='tel:+9779804179800' className="bg-[#05386B] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center" type="button">
                                <FaPhoneAlt className="mr-2" />
                                Call Me
                            </a>
                            <a href="mailto:binitastha34@gmail.com" className="bg-[#5CDB95] hover:bg-green-500 text-gray-800 font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center" type="button">
                                <FaEnvelope className="mr-2" />
                                Email Me
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="John" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                    Mobile
                                </label>
                                <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="number" placeholder="+977 9812345678" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@example.com" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here..." rows="4"></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-[#5CDB95] hover:bg-green-300 text-gray-700 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Send
                                </button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
