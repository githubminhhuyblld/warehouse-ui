import {FC, ReactNode} from 'react';


import Header from "~/layouts/components/Header/Header.tsx";
import Footer from "~/layouts/components/Footer/Footer.tsx";


interface DefaultLayoutStylesProps {
    children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutStylesProps> = ({children}) => {
    return <>
        <header className='header'>
            <Header/>
        </header>
        <aside className='content'>
            {children}
        </aside>
        <footer className='footer'>
            <Footer/>
        </footer>

    </>;
};

export default DefaultLayout;