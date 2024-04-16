import { ModeToggle } from "@/components/ui/ModeToggle";

export const NavBar = () => {

    return (
        <nav className="border-b border-neutral-900 px-12 py-4">
            <div className="flex justify-between items-center">
                <div className="text-white font-bold">Logo</div>
                <ModeToggle />
                <button className="text-white">Sair</button>
            </div>
        </nav>
    );
}