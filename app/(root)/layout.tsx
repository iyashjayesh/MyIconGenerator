import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavBar />
            <div className="hidden md:flex mt-16 w-20 flex-col fixed insert-y-0">
                <Sidebar />
            </div>
            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>
    );
}

export default AuthLayout;