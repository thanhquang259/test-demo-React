import CartItem from "./Cart-item";
const CartList = (props) => {
    const { carts, onClickIncrement, onClickDecrement, onClickRemove } = props;

    const carRenderList = () => {
        const cartListRender = carts.map((cartItem) => {
            if (cartItem.amount > 0) {
                return (
                    < CartItem
                        cartItem={cartItem}
                        key={cartItem.id}
                        onClickRemove={onClickRemove}
                        onClickIncrement={onClickIncrement}
                        onClickDecrement={onClickDecrement}
                    />
                )
            }

        })
        return cartListRender;
    }
    return (
        <div>
            {carRenderList()}
        </div>
    )
}
export default CartList;