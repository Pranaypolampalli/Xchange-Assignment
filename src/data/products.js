const products = [
  {
      id: 1,
      name: 'Smartphone',
      price: 699,
      location: 'Charminar, Hyderabad',
      description: 'A high-end smartphone.',
      latitude: 17.3616,
      longitude: 78.4747,
      imageUrl: 'https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg',
  },
  {
      id: 2,
      name: 'Laptop',
      price: 999,
      location: 'Hitech City, Hyderabad',
      description: 'A powerful laptop.',
      latitude: 17.4474,
      longitude: 78.3762,
      imageUrl: 'https://img.freepik.com/premium-photo/laptop-isolated-white-background-3d-illustration_92790-3095.jpg',
  },
  {
      id: 3,
      name: 'Headphones',
      price: 199,
      location: 'Banjara Hills, Hyderabad',
      description: 'Noise-cancelling headphones.',
      latitude: 17.4126,
      longitude: 78.4392,
      imageUrl: 'https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg',
  },
  {
      id: 4,
      name: 'Air Conditioner',
      price: 499,
      location: 'Koramangala, Bangalore',
      description: 'A cooling air conditioner.',
      latitude: 12.9340,
      longitude: 77.6101,
      imageUrl: 'https://img.freepik.com/free-photo/air-conditioning-decoration-interior_74190-6226.jpg',
  },
  {
      id: 5,
      name: 'Washing Machine',
      price: 350,
      location: 'Andheri, Mumbai',
      description: 'A modern washing machine.',
      latitude: 19.1190,
      longitude: 72.8456,
      imageUrl: 'https://img.freepik.com/free-vector/washing-machine-realistic-composition-with-housework-equipment-symbols-illustration_1284-29129.jpg',
  },
  {
      id: 6,
      name: 'Refrigerator',
      price: 450,
      location: 'Juhu, Mumbai',
      description: 'A double-door refrigerator.',
      latitude: 19.0760,
      longitude: 72.8777,
      imageUrl: 'https://img.freepik.com/premium-vector/realistic-refridgerator-white-background_998164-453.jpg',
  },
  {
      id: 7,
      name: 'Smart TV',
      price: 1200,
      location: 'Madhapur, Hyderabad',
      description: '4K Smart TV with HDR support.',
      latitude: 17.4440,
      longitude: 78.3744,
      imageUrl: 'https://img.freepik.com/free-psd/modern-tv-isolated_23-2151430326.jpg',
  },
  {
      id: 8,
      name: 'Microwave Oven',
      price: 200,
      location: 'Indiranagar, Bangalore',
      description: 'A compact microwave oven.',
      latitude: 12.9716,
      longitude: 77.6412,
      imageUrl: 'https://img.freepik.com/free-vector/realistic-microwave-oven-with-light-inside-with-open-close-door_1441-1723.jpg',
  },
  {
      id: 9,
      name: 'Smartwatch',
      price: 150,
      location: 'Banjara Hills, Hyderabad',
      description: 'A fitness-oriented smartwatch.',
      latitude: 17.4126,
      longitude: 78.4392,
      imageUrl: 'https://img.freepik.com/premium-photo/new-smart-fitness-bracelet-with-blank-black-screen_298425-723.jpg',
  },
  {
      id: 10,
      name: 'Bluetooth Speaker',
      price: 120,
      location: 'Connaught Place, Delhi',
      description: 'Portable Bluetooth speaker with great sound.',
      latitude: 28.6358,
      longitude: 77.2245,
      imageUrl: 'https://img.freepik.com/free-photo/composition-smart-speaker-table_23-2149036841.jpg',
  },
  {
      id: 11,
      name: 'Camera',
      price: 1500,
      location: 'Kochi, Kerala',
      description: 'DSLR camera with 24 MP resolution.',
      latitude: 9.9312,
      longitude: 76.2673,
      imageUrl: 'https://img.freepik.com/premium-photo/beautiful-photography-isolated-black-background_787273-15830.jpg',
  },
  {
      id: 12,
      name: 'Gaming Console',
      price: 400,
      location: 'Vashi, Navi Mumbai',
      description: 'Latest gaming console for high-end gaming.',
      latitude: 19.0800,
      longitude: 72.9150,
      imageUrl: 'https://img.freepik.com/premium-photo/retro-gamepads-joysticks-red-blue-gradient-neon-light-video-game-gaming-80s_175682-20495.jpg',
  },
  {
      id: 13,
      name: 'Tablet',
      price: 299,
      location: 'Whitefield, Bangalore',
      description: '10-inch tablet with a vivid display.',
      latitude: 12.9718,
      longitude: 77.6413,
      imageUrl: 'https://img.freepik.com/free-vector/tablet-device-digital-gadget_23-2147836674.jpg',
  },
  {
      id: 14,
      name: 'Fitness Band',
      price: 50,
      location: 'Rajouri Garden, Delhi',
      description: 'Tracks your daily fitness activity.',
      latitude: 28.6434,
      longitude: 77.1225,
      imageUrl: 'https://img.freepik.com/free-photo/fitness-bracelet-isolated-white-background_99433-144.jpg',
  },
  {
      id: 15,
      name: 'Electric Kettle',
      price: 40,
      location: 'MG Road, Pune',
      description: 'Boils water in minutes.',
      latitude: 18.5204,
      longitude: 73.8567,
      imageUrl: 'https://img.freepik.com/free-photo/electric-kettle_1102-1697.jpg',
  },
  {
    id: 16,
    name: 'Air Purifier',
    price: 250,
    location: 'Sector 62, Noida',
    description: 'Improves air quality in your home.',
    latitude: 28.5355,
    longitude: 77.3910,
    imageUrl: 'https://img.freepik.com/free-photo/air-purifier-living-room_23-2148883176.jpg',
},
{
    id: 17,
    name: 'Drone',
    price: 800,
    location: 'Anna Nagar, Chennai',
    description: 'A high-performance drone for aerial photography.',
    latitude: 13.0838,
    longitude: 80.2824,
    imageUrl: 'https://img.freepik.com/free-photo/drone-black-background_23-2147915118.jpg',
},
{
    id: 18,
    name: 'Electric Scooter',
    price: 1200,
    location: 'Salt Lake, Kolkata',
    description: 'Eco-friendly and easy to ride.',
    latitude: 22.5867,
    longitude: 88.4172,
    imageUrl: 'https://img.freepik.com/free-photo/electric-scooter-studio-background_23-2149047247.jpg',
},
{
    id: 19,
    name: 'Projector',
    price: 600,
    location: 'Panaji, Goa',
    description: 'HD projector for home and office use.',
    latitude: 15.4909,
    longitude: 73.8278,
    imageUrl: 'https://img.freepik.com/free-photo/projector-isolated-white-background_1102-133.jpg',
},
{
    id: 20,
    name: 'Robot Vacuum',
    price: 300,
    location: 'Saket, Delhi',
    description: 'Smart vacuum for automated cleaning.',
    latitude: 28.5246,
    longitude: 77.2106,
    imageUrl: 'https://img.freepik.com/free-photo/robot-vacuum-cleaner-isolated-white-background_1205-621.jpg',
},
{
    id: 21,
    name: 'Gaming Chair',
    price: 220,
    location: 'Cyber Hub, Gurgaon',
    description: 'Ergonomic gaming chair with lumbar support.',
    latitude: 28.4721,
    longitude: 77.0810,
    imageUrl: 'https://img.freepik.com/free-photo/gaming-chair-front-view-isolated_23-2149050046.jpg',
},
{
    id: 22,
    name: 'Smart Home Hub',
    price: 150,
    location: 'Teynampet, Chennai',
    description: 'Control all your smart devices from one place.',
    latitude: 13.0298,
    longitude: 80.2405,
    imageUrl: 'https://img.freepik.com/free-photo/smart-home-hub-table_23-2148883179.jpg',
},
{
    id: 23,
    name: 'Portable Generator',
    price: 500,
    location: 'Palarivattom, Kochi',
    description: 'Reliable power backup for outdoor adventures.',
    latitude: 9.9816,
    longitude: 76.3029,
    imageUrl: 'https://img.freepik.com/free-photo/portable-generator-isolated-white_23-2148883202.jpg',
},
{
    id: 24,
    name: 'Camping Tent',
    price: 120,
    location: 'Manali, Himachal Pradesh',
    description: 'Durable camping tent for outdoor enthusiasts.',
    latitude: 32.2396,
    longitude: 77.1887,
    imageUrl: 'https://img.freepik.com/free-photo/tent-set-beautiful-mountain-landscape_1150-10462.jpg',
},
{
    id: 25,
    name: 'Electric Bike',
    price: 1500,
    location: 'Lajpat Nagar, Delhi',
    description: 'A sustainable commuting option.',
    latitude: 28.5664,
    longitude: 77.2433,
    imageUrl: 'https://img.freepik.com/free-photo/electric-bicycle-studio_23-2149050044.jpg',
},
{
    id: 26,
    name: 'Coffee Maker',
    price: 80,
    location: 'Jayanagar, Bangalore',
    description: 'Brew your favorite coffee at home.',
    latitude: 12.9250,
    longitude: 77.5938,
    imageUrl: 'https://img.freepik.com/free-photo/coffee-maker-isolated-white_1102-1114.jpg',
},
{
    id: 27,
    name: 'Electric Grill',
    price: 120,
    location: 'Secunderabad, Hyderabad',
    description: 'Perfect for grilling indoors.',
    latitude: 17.4399,
    longitude: 78.4983,
    imageUrl: 'https://img.freepik.com/free-photo/electric-grill-isolated-white-background_1102-1335.jpg',
},
{
    id: 28,
    name: 'Treadmill',
    price: 800,
    location: 'Adyar, Chennai',
    description: 'Stay fit with this high-tech treadmill.',
    latitude: 13.0032,
    longitude: 80.2550,
    imageUrl: 'https://img.freepik.com/free-photo/treadmill-isolated-white-background_1102-1945.jpg',
},
{
    id: 29,
    name: 'Digital Camera',
    price: 600,
    location: 'Park Street, Kolkata',
    description: 'Compact digital camera with excellent zoom.',
    latitude: 22.5565,
    longitude: 88.3507,
    imageUrl: 'https://img.freepik.com/free-photo/digital-camera-isolated-white-background_1102-2451.jpg',
},
{
    id: 30,
    name: 'Electric Guitar',
    price: 500,
    location: 'Shivaji Nagar, Pune',
    description: 'Create amazing music with this electric guitar.',
    latitude: 18.5308,
    longitude: 73.8476,
    imageUrl: 'https://img.freepik.com/free-photo/electric-guitar-isolated-white-background_1102-1590.jpg',
},
];

export default products;
