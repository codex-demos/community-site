import Image from 'next/image';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Airport Express',
      description: 'Fast and reliable airport shuttle services.',
      contact: 'Call us at 123-456-7890',
      src: 'airport',
    },
    {
      name: 'EcoRive Cleaners',
      description: 'Eco-friendly cleaning services for your home and office.',
      contact: 'Email us at contact@ecorive.com',
      src: 'ecorive',
    },
    {
      name: 'GrassRoots Landscaping',
      description: 'Innovative landscaping solutions for modern homes.',
      contact: 'Visit us at 123 Greenway Blvd, Nature City',
      src: 'grass',
    },
    {
      name: 'GreenLeaf Grocers',
      description: 'Fresh organic groceries right to your doorstep.',
      contact: 'Order online at greenleafgrocers.com',
      src: 'greenleaf',
    },
    {
      name: 'LegalEase Consultancy',
      description: 'Expert legal advice for personal and business needs.',
      contact: 'Schedule a consultation at legalease.com',
      src: 'legal',
    },
    {
      name: 'Mechano Auto Repairs',
      description: 'Trusted car repair and maintenance services.',
      contact: 'Book an appointment at 456-789-0123',
      src: 'mechanic',
    },
    {
      name: 'Pasta Panorama',
      description: 'Delicious homemade pasta and Italian cuisine.',
      contact: 'Reserve a table at pastapanorama.com',
      src: 'pasta',
    },
    {
      name: 'Seafood Delight',
      description: 'The freshest seafood in town, from our shore to your door.',
      contact: 'Order now at 789-012-3456',
      src: 'seafood',
    },
    {
      name: 'Sunset Photography',
      description: 'Capturing your special moments against stunning sunsets.',
      contact: 'Inquire at sunsetphoto.com',
      src: 'sunset',
    },
  ];

  return (
    <section>
      <h2 className="d-flex justify-content-center">Meet Our Sponsors</h2>
      <div className="d-flex flex-wrap justify-center gap-4 p-5">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="text-center"
          >
            <Image
              width={150}
              height={150}
              src={`/sponsors/${sponsor.src}.png`}
              alt={`${sponsor.name} Logo`}
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-2">{sponsor.name}</h3>
            <p>{sponsor.description}</p>
            <p className="font-bold">{sponsor.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
