
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router"
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
    const activeStyle =  "underline underline-offset-4"
    const context = useContext(ShoppingCartContext)

    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to="/" onClick={() => context.setSearchByCategory()} className="font-semibold text-lg" >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" 
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" 
                    onClick={() => context.setSearchByCategory("clothes")}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" 
                    onClick={() => context.setSearchByCategory("electronics")}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" 
                    onClick={() => context.setSearchByCategory("furniture")}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" 
                    onClick={() => context.setSearchByCategory("toys")}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" 
                    onClick={() => context.setSearchByCategory("others")}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                   edxilcoil@gmail.com
                </li>
                <li>
                    <NavLink to="../my-orders" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center gap-1">
                    <ShoppingCartIcon className="size-4" /> {context.count}
                </li>
            </ul>
        </nav>
    )
}
export default Navbar