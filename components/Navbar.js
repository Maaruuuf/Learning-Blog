import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './theme-btn';


const Navbar = () => {
    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10 ">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}><div className="text-lg font-bold">
                   LearnCode
                </div></Link>

                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="transition-transform transform hover:scale-105 duration-300 hover:font-semibold">
                       Home
                    </Link>
                    <Link href={`/about`}  className="transition-transform transform hover:scale-105 duration-300 hover:font-semibol">
                        About
                    </Link>
                    <Link href={`/blog`} className="transition-transform transform hover:scale-105 duration-300 hover:font-semibold">
                       Blog
                    </Link>
                    <Link href={`/contact`} className="transition-transform transform hover:scale-105 duration-300 hover:font-semibold">
                       Contact
                    </Link>
                    <div className='flex items-center'>
                        <Button className="transition-transform transform hover:scale-105 duration-300 hover:font-semibold">
                           <EnvelopeOpenIcon className="mr-2 h-2.5 w-2" /> Login Here!
                        </Button>
                        <Button asChild className="mx-1 transition-transform transform hover:scale-105 duration-300 hover:font-semibold">
                           <Link href="/login">Signup</Link>
                        </Button>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>Open</SheetTrigger>

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/TR/SVG.">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my2">LearnCode</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/">
                                            Home
                                        </Link>
                                        <Link href="/about">
                                            About
                                        </Link>
                                        <Link href="/Blog">
                                            Blog
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Button>
                                                <EnvelopeOpenIcon className="mr-2 h-2.5 w-2" /> Login with Email
                                            </Button>
                                            <Button className="mx-1" variant="destructive">SignUp</Button>
                                        </div>
                                    </div>

                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;
