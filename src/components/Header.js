import * as React from "react";
import { Link } from "gatsby";

// CSS here
import * as style from "./Header.module.css";

const Header = () => {
    return (
        <React.Fragment>
            <div className={style.header}>
                <Link to="/"><div className={style.rightHeaderMenu}>Home</div></Link>
                <Link to="/store"><div className={style.rightHeaderMenu}>Store</div></Link>
                <Link to="/cart"><div className={style.leftHeaderMenu}>Cart</div></Link>
            </div>
        </React.Fragment>
    );
}

export default Header;