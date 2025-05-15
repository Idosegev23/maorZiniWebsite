import Image from 'next/image';
import Link from 'next/link';

interface MagazineCardProps {
  title: string;
  summary: string;
  image: string;
  slug: string;
  date?: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  title,
  summary,
  image,
  slug,
  date,
}) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="relative aspect-[16/9] w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          loading="lazy"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brandBlue mb-3">{title}</h3>
        <p className="text-brandGray mb-4 flex-grow line-clamp-3">{summary}</p>
        {date && <p className="text-sm text-brandGray mb-4">{date}</p>}
        <Link 
          href={`/magazine/${slug}`} 
          className="text-brandGold hover:text-brandBlue font-medium transition-colors self-start"
        >
          קרא/י עוד &rarr;
        </Link>
      </div>
    </div>
  );
};

export default MagazineCard; 