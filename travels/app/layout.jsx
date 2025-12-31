import  '@/assets/globals.css';

const MainLayout = ({ children }) => {
    return (
        <html lang="he">
            <body>
                <main>
                    {children}
                </main>
            </body>
            </html>
    );
}
export default MainLayout;