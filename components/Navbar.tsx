'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { signOut } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [pathname]);

    const handleLogout = async () => {
        setLoading(true);
        await signOut();
        redirect('/sign-in');
    };
    const handleLoadingComplete = () => {
        console.log('Page transition complete');
        // You can trigger additional animations here if needed
    };

    return (
        <>
            
            <nav className="shadow-md py-4 px-6 flex items-center animate-fadeIn justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <h2 className="text-2xl font-semibold text-white">PKPrep</h2>
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/about"
                        className="text-white hover:text-gray-300 transition duration-200"
                    >
                        About
                    </Link>
                    <Button onClick={handleLogout}
                        className="btn btn-primary">
                        Log out
                    </Button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
