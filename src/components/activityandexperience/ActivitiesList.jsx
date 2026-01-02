import React from 'react';
import ActivityCard from './ActivityCard';
import { useTranslation } from 'react-i18next';

const activityImages = {
  wildlife: "https://media.istockphoto.com/id/474690025/photo/children-at-zoo-feeding-giraffe.jpg?s=612x612&w=0&k=20&c=pAswjPrUAelDOscYpbZE0yePHiREBYwqSB7quGBvg68=",
  safari: "https://media.istockphoto.com/id/2240068318/photo/mother-and-baby-pointing-at-camel-in-zoo.jpg?s=612x612&w=0&k=20&c=40GZ2Ioiyi8oAvadghk0lepIZJGXUim2l6MU3-4_lI0=",
  riding: "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=612x612&w=0&k=20&c=zZpS5SxgBNFhI5kb-oBnf2CL4RyBcRKgCGrImtKs7dw=",
  education: "https://media.istockphoto.com/id/2205539019/photo/families-enjoying-a-zoo-outing.jpg?s=612x612&w=0&k=20&c=CjTCAsmSnQOCdetsoo0PwuoJJBd3FbiGd9W3fCoh2k8=",
  birds: "https://media.istockphoto.com/id/2207341915/photo/three-vibrant-sun-conures-perch-closely-together-on-a-branch-gently-preening-each-other-with.jpg?s=612x612&w=0&k=20&c=LZ26QK9MWKgDOQBnBB9-vfLb6n5q4aS7XEMad8Ram6o=",
  hikes: "https://media.istockphoto.com/id/1126265493/photo/canicross-exercises-man-runs-with-his-beagle-dog-at-sunny-morning.jpg?s=612x612&w=0&k=20&c=2dsmYX5620KhC-Jjry1WDlLJLZ_11twHnYIJbc2y83M=",
};

const ActivitiesList = () => {
  const { t } = useTranslation("activitiesList");
  const translatedActivities = t("activities", { returnObjects: true });

  const activitiesData = translatedActivities.map((activity) => ({
    ...activity,
    imageUrl: activityImages[activity.id],
  }));

  return (
    <section className="py-20 bg-gray-50" id="activities">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00627B] mb-2">
          <span className='text-black'>{t("heading.highlight")}</span> {t("heading.main")}
        </h2>
        <p className="text-xl text-gray-700 mt-2">{t("subheading")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-12">
        {activitiesData.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            ageGroup={activity.ageGroup}
            imageUrl={activity.imageUrl}
            whatsappMessage={activity.whatsappMessage}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesList;
