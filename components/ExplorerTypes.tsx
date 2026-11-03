import Link from 'next/link';

const explorerData = [
  {
    id: 1,
    title: "Romantic Escapes",
    subtitle: "Honeymoons & beautiful retreats ↗",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    link: "#romantic"
  },
  {
    id: 2,
    title: "Wild Adventures",
    subtitle: "Mountains, trails & thrills ↗",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    link: "#adventure"
  },
  {
    id: 3,
    title: "Soulful India",
    subtitle: "Culture, temples & traditions ↗",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
    link: "#soulful"
  }
];

export default function ExplorerTypes() {
  return (
    <section className="w-full bg-[#faf8f3] py-20 px-4 sm:px-8 lg:px-16 text-gray-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-blue-600"></span>
            <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
              TRAVEL YOUR OWN WAY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-950 tracking-tight">
            India for every kind of explorer.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 font-light">
            Whatever makes your heart race, there’s an Indian journey waiting for you.
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {explorerData.map((item) => (
            <Link 
              key={item.id}
              href={item.link}
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/60 flex flex-col justify-end p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content at Bottom */}
              <div className="relative z-20 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white transition flex items-center gap-1">
                  {item.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}