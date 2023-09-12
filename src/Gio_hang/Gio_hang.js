import { useState } from 'react'
import './Gio_hang.scss'
import NavBar from './NavBar'
import Footer from './Footer'
import cartList from '../Gio_hang/Service/Cart'
import CartList from './CartList'

const Gio_hang = () => {

    const [carts, setCarts] = useState(cartList);
    const cartTotal = () => {
        let cartTotal = 0;
        for (let i = 0; i < carts.length; i++) {
            cartTotal = cartTotal + carts[i].amount;
        }
        return cartTotal;
    }
    const cartAmount = () => {
        let cartAmount = 0;
        for (let i = 0; i < carts.length; i++) {
            cartAmount = cartAmount + carts[i].amount * carts[i].price;
        }
        return cartAmount;
    }
    const handleClickRemove = (id) => {
        const newStateCart = carts.filter(function (cartItem) {
            if (cartItem.id != id) {
                return true;
            }
        });
        setCarts(newStateCart);
    }
    const handleClickIncrement = (cartItem) => {
        const indexElement = carts.findIndex(function (cartElementLoop) {
            return cartElementLoop.id === cartItem.id;
        });
        const cartNewState = [...carts];
        cartNewState[indexElement] = { ...cartItem };
        cartNewState[indexElement].amount++;
        setCarts(cartNewState)
    }

    const handleClickDecrement = (cartItem) => {
        const indexElement = carts.findIndex(function (cartElementLoop) {
            return cartElementLoop.id === cartItem.id;
        });
        const cartNewState = [...carts];
        cartNewState[indexElement] = { ...cartItem };
        cartNewState[indexElement].amount--;
        setCarts(cartNewState)
    }
    const handleClearAllCart = () => {
        console.log("abc")
        setCarts([]);
    }
    const cartsCheckAmountNoEmpty = carts.filter(function (cartItem) {
        if (cartItem.amount > 0) {
            return true;
        }
    });



    if (carts.length === 0 || cartsCheckAmountNoEmpty.length === 0) {
        return (
            <main>
                <NavBar />


                <section className="cart">
                    <header>
                        <h2>Giỏ hàng của bạn</h2>
                        <h2>Chưa có sản phẩm nào</h2>
                    </header>

                    <CartList />
                    <Footer />
                </section>
            </main>
        )
    }

    return (
        <main>
            <NavBar cartTotal={cartTotal()} />


            <section className="cart">
                <header>
                    <h2>Giỏ hàng của bạn</h2>
                </header>

                <CartList carts={carts}
                    onClickRemove={handleClickRemove}
                    onClickIncrement={handleClickIncrement}
                    onClickDecrement={handleClickDecrement} />
                <Footer
                    cartAmount={cartAmount()}
                    onClickClearAllCart={handleClearAllCart}


                />
            </section>
        </main>
    )
}
export default Gio_hang;