// const NavBar = () => {
//     return (
//         <nav>
// <ul>
//     <li><a href="#sobre Mim">Sobre Mim</a></li>
//     <li><a href="#habilidades">Habilidades</a></li>
//     <li><a href="#portifolio">Portifólio</a></li>
//     <li><a href="#contato">Contato</a></li>
// </ul>
//         </nav>
//     )
// }

// export default NavBar;
import React from "react";

const NavBar = () => {
    const [isSticky, setIsSticky] = React.useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <ul>
                <li><a href="#sobre Mim">Sobre Mim</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#portifolio">Portifólio</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;