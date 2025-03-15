import { useRef } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
    const navContainerRef = useRef(null);

    return (
        <div ref={navContainerRef} className="
            fixed z-50 top-4 h-16 inset-x-0 border-none
            transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center
                    justify-between p-4">
                        <div className="flex items-center
                            gap-7">
                                <img src="/img/logo.png"
                                    alt="logo"
                                    className="w-10"
                                />
                                <Button 
                                    id="product-button"
                                    title="Products"
                                    leftIcon={<TiLocationArrow />}
                                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                                />
                        </div>

                        <div className="flex h-full items-center">
                            <div className="hidden md:block">
                                {navItems.map((item, index) =>{
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase()}`}
                                    />
                                })}
                            </div>
                        </div>
                </nav>     

            </header>
        </div>
    )
}

export default Navbar