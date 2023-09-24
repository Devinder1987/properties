import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimneyUser,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className='flex justify-between w-full h-16 p-2 text-white bg-stone-900 align-middle'>
      <div className='flex'>
        <Link className='flex' href='/'>
          <FontAwesomeIcon
            icon={faHouseChimneyUser}
            style={{
              width: '42px',
              height: '48px',
              marginLeft: '8px',
            }}
          />
        </Link>
      </div>
      <div className='flex items-center'>Properties</div>
      <div className='flex'>
        <a className='flex' href='tel:+918586986101'>
          <FontAwesomeIcon
            icon={faHeadset}
            style={{
              width: '42px',
              height: '48px',
              marginLeft: '8px',
            }}
            shake
          />
        </a>
      </div>
    </header>
  );
}
