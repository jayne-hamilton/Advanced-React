import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">Products</Link>
      <Link href="/">Sell</Link>
      <Link href="/">Orders</Link>
      <Link href="/">Accounts</Link>
    </NavStyles>
  );
}
