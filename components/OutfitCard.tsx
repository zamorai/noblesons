import React from 'react';

type OutfitCardProps = {
  image: string;
  title: string;
  tags: string[];
};

const tagColors: { [key: string]: string } = {
  Casual: 'bg-blue-200 text-blue-800',
  Summer: 'bg-yellow-200 text-yellow-800',
  Light: 'bg-green-200 text-green-800',
  Formal: 'bg-red-200 text-red-800',
  Business: 'bg-purple-200 text-purple-800',
  Classic: 'bg-gray-200 text-gray-800',
  Winter: 'bg-blue-300 text-blue-900',
  Cozy: 'bg-orange-200 text-orange-800',
  Urban: 'bg-teal-200 text-teal-800',
  Street: 'bg-indigo-200 text-indigo-800',
  Trendy: 'bg-pink-200 text-pink-800',
};

const OutfitCard: React.FC<OutfitCardProps> = ({ image, title, tags }) => {
  return (
    <div className="glass bg-white rounded-lg shadow overflow-hidden">
      <div className="h-full">
        <img src={image} alt={title} className="w-full h-max object-cover" />
        <div className="p-4 h-min flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className={`text-sm font-medium px-2 py-1 rounded ${tagColors[tag] || 'bg-gray-200 text-gray-800'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
