import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="en">
        <head>
    <link rel="icon" href="/assets/favicon.png" />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        </head>
        <body>
            {children}
        </body>
    </html>
    );
}
                