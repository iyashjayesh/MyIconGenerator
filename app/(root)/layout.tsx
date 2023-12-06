import NavBar from "@/components/NavBar";

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavBar />
            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>
    );
}

export default AuthLayout;