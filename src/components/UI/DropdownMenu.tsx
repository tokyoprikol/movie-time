import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

interface DropdownMenuProps {
    title: string;
    menu: any[];
}

export default function DropdownMenu({ title, menu }: DropdownMenuProps) {
    return (
        <Menu>
            <MenuButton className="flex items-center gap-2 rounded-md px-3 py-1.5 font-semibold transition outline-none focus:not-data-focus:outline-none data-focus:outline data-hover:bg-neutral-800 data-open:bg-neutral-800">
                {title}
                <ChevronDown size={16} />
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom start"
                className="z-50 w-52 origin-top-left rounded-xl border border-white/5 bg-neutral-800 p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
                {menu.map((item) => (
                    <MenuItem>
                        <Link
                            to={item.link}
                            className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 transition data-focus:bg-white/10"
                        >
                            {item.name}
                        </Link>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
}
