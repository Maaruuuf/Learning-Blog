import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div>
            <section>
                <div className="container mx-auto p-6">
                    <div className="relative">
                        <Image src="/help.jpg" width={1000}
                            height={700}
                            alt="Picture of the author" class="w-full h-64 object-cover opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl font-bold">Contact Us</h1>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-600">Support Center</h2>
                        <p className="mt-4 text-gray-500">For all other inquiries, feel free to reach out via our contact page. We’re committed to providing you with the best support possible!</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-blue-500 mb-4">
                                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd"></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800"> Feedback</h3>
                            <p className="mt-2 text-gray-600">We love hearing from our readers! Share your feedback or suggest new topics by filling out this form. Your input helps us improve!</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-blue-500 mb-4">
                                <path fillRule="evenodd" d="M7.171 4.146l1.947 2.466a3.514 3.514 0 011.764 0l1.947-2.466a6.52 6.52 0 00-5.658 0zm8.683 3.025l-2.466 1.947c.15.578.15 1.186 0 1.764l2.466 1.947a6.52 6.52 0 000-5.658zm-3.025 8.683l-1.947-2.466c-.578.15-1.186.15-1.764 0l-1.947 2.466a6.52 6.52 0 005.658 0zM4.146 12.83l2.466-1.947a3.514 3.514 0 010-1.764L4.146 7.171a6.52 6.52 0 000 5.658zM5.63 3.297a8.01 8.01 0 018.738 0 8.031 8.031 0 012.334 2.334 8.01 8.01 0 010 8.738 8.033 8.033 0 01-2.334 2.334 8.01 8.01 0 01-8.738 0 8.032 8.032 0 01-2.334-2.334 8.01 8.01 0 010-8.738A8.03 8.03 0 015.63 3.297zm5.198 4.882a2.008 2.008 0 00-2.243.407 1.994 1.994 0 00-.407 2.243 1.993 1.993 0 00.992.992 2.008 2.008 0 002.243-.407c.176-.175.31-.374.407-.585a2.008 2.008 0 00-.407-2.243 1.993 1.993 0 00-.585-.407z" clipRule="evenodd"></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800">Technical Support</h3>
                            <p className="mt-2 text-gray-600">Encounter a bug or technical issue? Our team is ready to assist you. Please submit a ticket with details of the problem, and we’ll get back to you as soon as possible.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-blue-500 mb-4">
                                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z" clipRule="evenodd"></path>
                                <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z"></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800">Content Inquiries</h3>
                            <p className="mt-2 text-gray-600">Have a question about our tutorials or resources? Drop us a line at support@example.com or check out our FAQ section for answers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;