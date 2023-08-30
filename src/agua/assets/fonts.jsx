import { Roboto } from 'next/font/google';
import localFont from "next/font/local";
                
export const GoogleRoboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--Roboto'
});
export const Metropolis_ExtraBold = localFont({
    src: "../../../public/assets/Metropolis-ExtraBold.woff2",
    display: 'swap',
    variable: "--Metropolis_ExtraBold",
});
export const Metropolis_Regular_1 = localFont({
    src: "../../../public/assets/Metropolis-Regular_1.woff2",
    display: 'swap',
    variable: "--Metropolis_Regular_1",
});

