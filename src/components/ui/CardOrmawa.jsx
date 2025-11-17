export default function CardOrmawa({ title, tags }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e0d6d3] shadow-sm flex flex-col justify-between h-[280px]">

      {/* TITLE */}
      <h3 className="font-semibold text-[17px] text-[#2d1b18] leading-snug mb-4">
        {title}
      </h3>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`
              text-xs px-3 py-1 rounded-full border 
              ${tag === "Organisasi" ? "bg-red-100 text-red-700 border-red-200" : ""}
              ${tag === "LAB" ? "bg-red-200 text-red-800 border-red-300" : ""}
              ${tag === "Teknologi" ? "bg-red-600 text-white border-red-600" : ""}
              ${tag === "Olahraga" ? "bg-red-600 text-white border-red-600" : ""}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BUTTON */}
      <button className="border border-[#D54133] text-[#D54133] w-full py-2 rounded-lg font-medium hover:bg-[#f8dada] transition">
        Detail
      </button>

    </div>
  );
}
