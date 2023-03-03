import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import Link from '../../router/Link';
export default function Header() {

    const cartItems = useSelector((state) => state.cart);
    const totalItem = cartItems.reduce(
        (accumulator, currentItem) => accumulator + currentItem.quantity, 0
    );

    return (
        // <!-- Navbar -->
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <Link href="/">
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </Link>
                <div className="flex gap-4">
                    <Link href="/" className="navHome" id="lws-home">
                        Home
                    </Link>
                    <Link href="/cart" className="navCart" id="lws-cart">
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{totalItem}</span>
                    </Link>
                </div>
            </div>
        </nav>
        //   <!-- Navbar ends -->
    )
}
