import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='w-full mx-auto py-16 px-4 bg-[#ef4444] grid lg:grid-cols-3 gap-8 text-white'>
            <div>
                <h1 className='w-full text-3xl font-bold text-black'>myWebsite</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-black'>Solutions</h6>
                    <ul>
                        <li className='py-1 text-sm'>Analytics</li>
                        <li className='py-1 text-sm'>Marketing</li>
                        <li className='py-1 text-sm'>Commerce</li>
                        <li className='py-1 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-black'>Support</h6>
                    <ul>
                        <li className='py-1 text-sm'>Pricing</li>
                        <li className='py-1 text-sm'>Documentation</li>
                        <li className='py-1 text-sm'>Guides</li>
                        <li className='py-1 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-black'>Company</h6>
                    <ul>
                        <li className='py-1 text-sm'>About</li>
                        <li className='py-1 text-sm'>Blog</li>
                        <li className='py-1 text-sm'>Jobs</li>
                        <li className='py-1 text-sm'>Press</li>
                        <li className='py-1 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-black'>Legal</h6>
                    <ul>
                        <li className='py-1 text-sm'>Claim</li>
                        <li className='py-1 text-sm'>Policy</li>
                        <li className='py-1 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
            <div className='text-center'>@Copywright 2023 Soham Kothari</div>
        </div>
    )
}
