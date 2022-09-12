import React from 'react'
import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai'
import {Cart} from "./";
import {useStateContext} from "../context/StateContext";
import {GiFruitBowl} from 'react-icons/gi'

const Navbar = () =>{
    const {showCart, setShowCart, totalQuantities} = useStateContext();
    return(
        <div className={"navbar-container"}>
            <div className={"description"}>
                <Link href={"/"}>
                    <div className={"fruit-icon"}> <GiFruitBowl />
                        Fruitees inc.</div>
                </Link>
            </div>
            <button type={"button"} className={"cart-icon"} onClick={() => setShowCart(true)}>
                <AiOutlineShopping/>
                <span className={"cart-item-qty"}>{totalQuantities}</span>
            </button>
            {showCart && <Cart/>}
        </div>
    )
}
export default Navbar;