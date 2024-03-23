import Image from 'next/image';

const Sponsors = () => {
  const sponsors = [
    'airport',
    'ecorive',
    'grass',
    'greenleaf',
    'legal',
    'mechanic',
    'pasta',
    'seafood',
    'sunset',
  ];
  return (
    <section className="d-flex flex-wrap justify-center gap-4 p-5">
      {sponsors.map((sponsor, index) => (
        <Image
          width={150}
          height={150}
          key={index}
          src={`/sponsors/${sponsor}.png`}
          alt="Sponsor Logo"
          className="rounded-lg shadow-lg"
        />
      ))}
    </section>
  );
};

export default Sponsors;
