import { Roboto } from 'next/font/google';
import localFont from "next/font/local";
                
export const GoogleRoboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--Roboto'
});
export const metropolisextrabold = localFont({
    src: "./fonts/metropolisextrabold.otf",
    display: 'swap',
    variable: "--metropolisextrabold",
});
export const metropolisregular = localFont({
    src: "./fonts/metropolisregular.otf",
    display: 'swap',
    variable: "--metropolisregular",
});

