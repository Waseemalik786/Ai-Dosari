import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryStats from '../components/gallery/GalleryStats';


export default function Gallery() {


  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />


      <div className="text-center mt-12 mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-[#00627B]">Our</span> Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the vibrant life at Al Dosari Reserve. From the wild animals to the
          joyful school trips, browse our collection of memories.
        </p>
      </div>






      <div>
        <GalleryGrid />
      </div>
      <GalleryStats />
    </div>
  );
}