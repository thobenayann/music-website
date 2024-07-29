import './globals.css';
import { Alex_Brush, Montserrat } from 'next/font/google';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// context provider
import NavContextProvider from '@/context/NavContext';

const alexBrush = Alex_Brush({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-alexBrush',
});

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: 'Mia REYNOLDS',
    description: 'A site showcasing the work of Mia Reynolds',
};

export default function RootLayout({ children }) {
    return (
        <NavContextProvider>
            <html lang='en'>
                <body
                    className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}
                >
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </NavContextProvider>
    );
}
