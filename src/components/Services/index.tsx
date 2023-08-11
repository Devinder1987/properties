const serviceData = [
  {
    name: 'Home Loan',
    description:
      '<b>You get get upto 85% loan</b><ul><li>benifit 1</li><li>benifit 1</li></ul>',
    image: 'image-url',
  },
  {
    name: 'Site Visit',
    description: 'There is absolutly free site visits.',
    image: 'image-url',
  },
  {
    name: 'Home Loan 2',
    description: 'You get get upto 85% loan',
    image: 'image-url',
  },
  {
    name: 'Site Visit 2',
    description: 'There is absolutly free site visits.',
    image: 'image-url',
  },
];

export default function Services() {
  return (
    <div className='w-full p-2 bg-white'>
      {serviceData.map((val) => {
        return (
          <div key={val.name} className='m-2 bg-slate-100 rounded'>
            <h1 className='text-2xl font-bold p-2 rounded-t bg-gradient-to-r from-purple-200 to-pink-200'>
              {val.name}
            </h1>
            <div
              className='p-2'
              dangerouslySetInnerHTML={{ __html: val.description }}
            />
          </div>
        );
      })}
    </div>
  );
}
