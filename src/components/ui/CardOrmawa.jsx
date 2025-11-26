'use client';

export default function CardOrmawa({ 
  title, 
  tags, 
  imageUrl = null, 
  onClick = () => {} 
}) {
  
  // Tag color mapping untuk lebih maintainable
  const tagStyles = {
    "Organisasi": "bg-red-100 text-red-700 border-red-200",
    "LAB": "bg-red-200 text-red-800 border-red-300",
    "Teknologi": "bg-red-600 text-white border-red-600",
    "Olahraga": "bg-red-600 text-white border-red-600"
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e0d6d3] shadow-sm hover:shadow-lg flex flex-col items-center h-full min-h-[380px] transition-all duration-300 group">

      {/* PROFILE CIRCLE - dengan support image */}
      <div className="w-32 h-32 bg-gray-300 rounded-full mb-6 shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Logo ${title}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl font-bold text-gray-400">
            {title.charAt(0)}
          </span>
        )}
      </div>

      {/* TITLE - dengan line-clamp untuk konsistensi */}
      <h3 className="font-semibold text-[17px] text-[#2d1b18] leading-snug mb-4 text-center min-h-[50px] flex items-center line-clamp-2">
        {title}
      </h3>

      {/* SPACER */}
      <div className="grow"></div>

      {/* TAGS - dengan mapping yang lebih clean */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
              tagStyles[tag] || "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BUTTON - dengan onClick handler */}
      <button 
        onClick={onClick}
        className="border border-[#D54133] text-[#D54133] w-full py-2.5 rounded-lg font-medium hover:bg-[#D54133] hover:text-white transition-all duration-300 shrink-0 active:scale-95"
        aria-label={`Lihat detail ${title}`}
      >
        Detail
      </button>

    </div>
  );
}