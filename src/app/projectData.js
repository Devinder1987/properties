export const projectData = [
  {
    id: 1,
    images: ['/images/House1.jpg', '/images/House2.jpg', '/images/House3.jpg'],
    title: 'Hari Nivas',
    minCost: 159.5,
    maxCost: 280.3,
    buildingType: ['Flats', 'Plots', 'Builder Floor', 'Independent house'],
    buildingSubType: '2,3 BHK Luxery Flats and Plots',
    minArea: 1100,
    maxArea: 2240,
    unit: 'Sq. feet',
    numberOfUnits: 224,
    address: 'Sector 102, Dawarka express, Gurgaon.',
    possessionDate: '2024-01-26',
    features:
      '<div><b>Below are the hilighted features of the project</b><ul><li>feature 1</li><li>feature 2</li></ul></div>',
    builder: {
      builderName: 'JMS Groups',
      about:
        '<div><p>JMS Group have more than 10 years of experince.</p><p>JMS group have delivered below projects Successfully</p><ul><li>Project1 </li><li>Project 2</>',
    },
    project: {
      area: '25',
      unit: 'Acre',
      youtubeLink: 'https://www.youtube.com/watch?v=5trPWkXSsEc',
      amenities: [
        { icon: '/icons/tree.svg', title: 'Lawn' },
        { icon: '/icons/road.svg', title: 'Running track' },
      ],
      location: { latitude: '', longitude: '' },
    },
    priceTrend: [
      { year: 2020, quater: 1, price: 800 },
      { year: 2020, quater: 2, price: 850 },
    ],
  },
  {
    id: 2,
    images: ['/images/House2.jpg', '/images/House2.jpg', '/images/House3.jpg'],
    title: 'Sai Bhawan',
    minCost: 19.5,
    maxCost: 28.3,
    buildingType: ['Flats', 'Builder Floor'],
    buildingSubType: '1, 2,3 BHK Flats',
    minArea: 1100,
    maxArea: 2240,
    unit: 'Sq. feet',
    numberOfUnits: 22,
    address: 'Sector 102, Dawarka express, Gurgaon.',
    possessionDate: '2024-01-26',
    features:
      '<div><b>Below are the hilighted features of the project</b><ul><li>feature 1</li><li>feature 2</li></ul></div>',
    builder: {
      builderName: 'JMS Groups',
      about:
        '<div><p>JMS Group have more than 10 years of experince.</p><p>JMS group have delivered below projects Successfully</p><ul><li>Project1 </li><li>Project 2</>',
    },
    project: {
      area: '1',
      unit: 'Acre',
      youtubeLink: 'https://www.youtube.com/watch?v=5trPWkXSsEc',
      amenities: [
        { icon: '/icons/tree.svg', title: 'Lawn' },
        { icon: '/icons/road.svg', title: 'Running track' },
      ],
      location: { latitude: '', longitude: '' },
    },
    priceTrend: [
      { year: 2020, quater: 1, price: 800 },
      { year: 2020, quater: 2, price: 850 },
    ],
  },
  {
    id: 3,
    images: ['/images/House3.jpg', '/images/House2.jpg', '/images/House1.jpg'],
    title: 'Ashiyana',
    minCost: 259.5,
    maxCost: 380.3,
    buildingType: ['Flats', 'Plots', 'Independent house'],
    buildingSubType: '2,3, 3.5 BHK Luxery Flats',
    minArea: 2100,
    maxArea: 3240,
    unit: 'Sq. feet',
    numberOfUnits: 224,
    address: 'Sector 98, Dawarka express, Gurgaon.',
    possessionDate: '2024-01-26',
    features:
      '<div><b>Below are the hilighted features of the project</b><ul><li>feature 1</li><li>feature 2</li></ul></div>',
    builder: {
      builderName: 'JMS Groups',
      about:
        '<div><p>JMS Group have more than 10 years of experince.</p><p>JMS group have delivered below projects Successfully</p><ul><li>Project1 </li><li>Project 2</>',
    },
    project: {
      area: '25',
      unit: 'Acre',
      youtubeLink: 'https://www.youtube.com/watch?v=5trPWkXSsEc',
      amenities: [
        { icon: '/icons/tree.svg', title: 'Lawn' },
        { icon: '/icons/road.svg', title: 'Running track' },
      ],
      location: { latitude: '', longitude: '' },
    },
    priceTrend: [
      { year: 2020, quater: 1, price: 800 },
      { year: 2020, quater: 2, price: 850 },
    ],
  },
];

export const serviceData = [
  {
    id: 1,
    name: 'Home Loan',
    icon: '/icons/indian-rupee-sign-solid.svg',
    description:
      '<b>You get get upto 85% loan</b><ul><li>benifit 1</li><li>benifit 1</li></ul>',
    image: 'image-url',
  },
  {
    id: 2,
    name: 'Site Visit',
    icon: '/icons/location-pin-solid.svg',
    description: 'There is absolutly free site visits.',
    image: 'image-url',
  },
  {
    id: 3,
    name: 'Home Interior',
    icon: '/icons/paint-roller-solid.svg',
    description: 'You get get upto 85% loan',
    image: 'image-url',
  },
  {
    id: 4,
    name: 'Properties Managment',
    icon: '/icons/tree.svg',
    description: 'There is absolutly free site visits.',
    image: 'image-url',
  },
  {
    id: 5,
    name: 'Housing Premium',
    icon: '/icons/tree.svg',
    description: 'There is absolutly free site visits.',
    image: 'image-url',
  },
  {
    id: 6,
    name: 'Fixed Deposit',
    icon: '/icons/tree.svg',
    description: 'There is absolutly free site visits.',
    image: 'image-url',
  },
];

export const filterData = [
  {
    id: 1,
    title: 'Type',
    values: ['Plots', 'Vila', 'Flat'],
  },
  {
    id: 2,
    title: 'Price',
    values: ['min', 'max'],
  },
  {
    id: 3,
    title: 'Area',
    values: ['min', 'max'],
  },
  {
    id: 4,
    title: 'Location',
    values: ['min', 'max'],
  },
];
