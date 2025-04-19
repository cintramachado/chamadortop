import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuBoxProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const MenuBox: React.FC<MenuBoxProps> = ({ imageSrc, title, description, link }) => {
    return (
        <Link href={link}>
        
                    <Image src={imageSrc} alt={title} layout="responsive" width={500} height={300} />
                
                    <h3>{title}</h3>
            
                <p >{description}</p>
        
        </Link>
    );
};

export default MenuBox;