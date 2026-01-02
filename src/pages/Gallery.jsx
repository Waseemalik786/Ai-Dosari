import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryStats from '../components/gallery/GalleryStats';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation("gallery");

  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />

      <div className="text-center mt-12 mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-[#00627B]">{t("title.highlight")}</span> {t("title.main")}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div>
        <GalleryGrid />
      </div>
      <GalleryStats />
    </div>
  );
}