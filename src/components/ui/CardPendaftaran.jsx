export default function CardPendaftaran({
  tags = [],
  title,
  subtitle,
  deadline,
  lowongan
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e0d6d3] shadow-sm">

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`
              text-xs px-3 py-1 rounded-full border 
              ${tag === "BUKA" ? "bg-green-100 text-green-700 border-green-200" : ""}
              ${tag === "Segera ditutup" ? "bg-red-100 text-red-700 border-red-200" : ""}
              ${tag === "Organisasi" ? "bg-red-600 text-white border-red-600" : ""}
              ${tag === "LAB" ? "bg-red-700 text-white border-red-700" : ""}
              ${tag === "Teknologi" ? "bg-gray-100 text-gray-700 border-gray-200" : ""}
              ${tag === "Sosial" ? "bg-gray-100 text-gray-700 border-gray-200" : ""}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-lg text-[#2d1b18]">
        {title}
      </h3>

      {/* SUBTITLE */}
      <p className="text-sm text-[#6b4a45] mb-4">
        {subtitle}
      </p>

      {/* INFO */}
      <div className="text-sm mb-5">
        <p>
          <span className="font-medium">Deadline:</span> {deadline}
        </p>
        <p>
          <span className="font-medium">Tersedia:</span> {lowongan}
        </p>
      </div>

      {/* BUTTON */}
      <button className="bg-[#D54133] w-full py-2 rounded-lg text-white font-semibold hover:bg-[#c23a2d] transition">
        Daftar sekarang
      </button>
    </div>
  );
}
