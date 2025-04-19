import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface MenuBoxProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string; }


const MenuBox: React.FC<MenuBoxProps> = ({ imageSrc, title, description, link }) => {
    return (
        <Link href={link}>
            <div className="my-10 group cursor-pointer rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-48">
                    <Image
                        src={imageSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
        </Link>
    );
};
export default MenuBox;