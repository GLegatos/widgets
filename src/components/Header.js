import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/list" className="item">
                Seach
            </Link>
            <Link href="/color" className="item">
                Color
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
        </div>
    );
};

export default Header;