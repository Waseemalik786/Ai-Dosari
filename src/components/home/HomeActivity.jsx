"use client";

import ActivityCard from "./ActivityCard";
import { useTranslation } from "react-i18next";

export default function HomeActivity() {
  const { t, i18n } = useTranslation("homeactivities");

  const whatsappNumber = t("whatsappNumber");
  const activities = t("activities", { returnObjects: true });
  const sectionTitle = t("sectionTitle");
  const sectionHighlight = t("sectionHighlight");
  const sectionDesc = t("sectionDesc");

  const handleBookActivity = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="activities-section" className="py-16 bg-gradient-to-b from-white to-emerald-50" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#00627B]">{sectionHighlight}</span> &nbsp;{sectionTitle.replace(sectionHighlight, "")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {sectionDesc}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              image={activity.image}
              desc={activity.desc}
              details={activity.details}
              ageGroup={activity.ageGroup}
              duration={activity.duration}
              bestFor={activity.bestFor}
              onBook={() => handleBookActivity(activity.whatsappMessage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
