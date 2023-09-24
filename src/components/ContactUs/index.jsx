import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
export default function ContactUs() {
  return (
    <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
      <h1 className='text-xl font-semibold mb-2 border-b-2'>Contact Us</h1>
      <p>We are just a call or whatsapp message away.</p>
      <div className='flex py-2 text-lg'>
        <a href='tel:+918586986101'>+918586986101</a>{' '}
        <a
          target='_blank'
          title='WhatsApp'
          href='https://api.whatsapp.com/send?phone=+918586986101&amp;text=Hi, I would like to get more information about new projects in Gurgaon. I am intrested in: <location> <Budget>'
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              color: '#069308',
              width: '24px',
              height: '24px',
              marginLeft: '8px',
            }}
          />
        </a>
      </div>
      <div className='flex py-2 text-lg'>
        <a href='mailto:deepak.verma@gmail.com'>
          deepak.verma@gmail.com
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              color: '#069308',
              width: '24px',
              height: '24px',
              marginLeft: '8px',
              display: 'inline',
            }}
          />
        </a>
      </div>
    </div>
  );
}
