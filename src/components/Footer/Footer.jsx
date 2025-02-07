import React from 'react'
import { FaPhone, FaRegCopyright } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <>
            <div id='contact' className='text-white mt-20'>
                <div className="container bg-gradient-to-b from-primary to-secondary rounded-t-3xl">

                    {/* Heading section */}
                    <h1 className='py-10 text-3xl font-bold font-cinzel text-secondary text-center underline decoration-primary'>Contact Us</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-black pb-6">
                        {/* Address */}
                        <div className="text-center space-y-4">
                            <div className='flex justify-center'>
                                <IoLocationSharp className='text-5xl' />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet.
                                <br />Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <MdEmail className='text-5xl' />
                            </div>
                            <div>
                                <p>info@bitendbliss.com</p>
                                <p>hr@bitendbliss.com</p>
                            </div>
                        </div>

                        {/* number section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <FaPhone className='text-5xl' />
                            </div>
                            <div>
                                <p>+91 1234567890</p>
                                <p>+91 1234567890</p>
                            </div>
                        </div>
                    </div>

                    {/* copyright */}
                    <div className="flex justify-between p-4 items-center">
                        <p className='flex items-center gap-1'><FaRegCopyright/>2025 Bites & Bliss . All rights reserved</p>
                        <div>
                            <a href="#">Privacy Policy | </a>
                            <a href="#">Terms & Condition</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
