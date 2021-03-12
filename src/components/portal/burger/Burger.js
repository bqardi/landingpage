import { useState } from "react";
import Portal from "../Portal";
import "./Burger.scss";

var burgerOpen = false;

function Burger({children, icon, size = 48}){
    var [open, setOpen] = useState(false);

    burgerOpen = open;

    return (
        <article className="Burger" style={{height: size + "px"}} open={open}>
            <button className="Burger__button" style={{width: size + "px"}} onClick={() => setOpen(!open)}>
                {icon || <svg viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg>}
            </button>
            <div className="Burger__static">
                {children}
            </div>
            <Portal>
                <div className="Burger__portal" open={open} onClick={() => setOpen(false)}>
                    {children}
                </div>
            </Portal>
        </article>
    );
}

var SlideIn = ({children, className, style, ...other}) => {
    return (
        <div className={`Burger__SlideIn${className ? " " + className : ""}`} onClick={(e) => e.stopPropagation()} {...other}>
            {children}
        </div>
    )
}
Burger.SlideIn = SlideIn;
var Nav = ({children, className, ...other}) => {
    return (
        <nav className={`Burger__nav${className ? " " + className : ""}`} {...other} open={burgerOpen}>
            {children}
        </nav>
    )
}
Burger.Nav = Nav;

export default Burger;