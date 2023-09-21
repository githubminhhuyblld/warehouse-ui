import { FC, ReactNode } from 'react';
import'./GlobalStyles.css'

interface GlobalStylesProps {
    children: ReactNode;
}
const GlobalStyles: FC<GlobalStylesProps> = ({ children }) => {
    return <>{children}</>;
};

export default GlobalStyles;