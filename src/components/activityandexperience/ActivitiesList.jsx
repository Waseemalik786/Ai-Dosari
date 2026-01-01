import React from 'react';
import ActivityCard from './ActivityCard';

const ActivitiesList = () => {
  const activitiesData = [
  {
    title: "Wildlife Viewing",
    description: "Get up close to incredible wildlife at Al Dosari Reserve. Watch various species in their natural habitat.",
    ageGroup: "All ages",
    imageUrl: "https://media.istockphoto.com/id/474690025/photo/children-at-zoo-feeding-giraffe.jpg?s=612x612&w=0&k=20&c=pAswjPrUAelDOscYpbZE0yePHiREBYwqSB7quGBvg68=",
    whatsappMessage: "I'd like to book the Wildlife Viewing activity.",
  },
  {
    title: "Safari Tours",
    description: "Explore the vast landscapes of the reserve with a thrilling safari experience, guided by experts.",
    ageGroup: "6+",
    imageUrl: "https://media.istockphoto.com/id/2240068318/photo/mother-and-baby-pointing-at-camel-in-zoo.jpg?s=612x612&w=0&k=20&c=40GZ2Ioiyi8oAvadghk0lepIZJGXUim2l6MU3-4_lI0=",
    whatsappMessage: "I'd like to book the Safari Tour activity.",
  },
  {
    title: "Horse & Camel Riding",
    description: "Enjoy a unique riding experience on horseback or camel, offering a serene way to explore the reserve.",
    ageGroup: "4+",
    imageUrl: "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=612x612&w=0&k=20&c=zZpS5SxgBNFhI5kb-oBnf2CL4RyBcRKgCGrImtKs7dw=",
    whatsappMessage: "I'd like to book Horse & Camel Riding.",
  },
  {
    title: "Educational Programs",
    description: "Engage in hands-on learning about wildlife conservation, animal behavior, and the environment.",
    ageGroup: "School groups / 10+",
    imageUrl: "https://media.istockphoto.com/id/2205539019/photo/families-enjoying-a-zoo-outing.jpg?s=612x612&w=0&k=20&c=CjTCAsmSnQOCdetsoo0PwuoJJBd3FbiGd9W3fCoh2k8=",
    whatsappMessage: "I'd like to book an Educational Program.",
  },
  {
    title: "Bird Watching",
    description: "Discover the diverse bird species at the reserve with expert guides and binoculars.",
    ageGroup: "All ages",
    imageUrl: "https://media.istockphoto.com/id/2207341915/photo/three-vibrant-sun-conures-perch-closely-together-on-a-branch-gently-preening-each-other-with.jpg?s=612x612&w=0&k=20&c=LZ26QK9MWKgDOQBnBB9-vfLb6n5q4aS7XEMad8Ram6o=",
    whatsappMessage: "I'd like to book the Bird Watching activity.",
  },
  {
    title: "Nature Hikes",
    description: "Explore scenic trails, spot native plants and wildlife, and immerse yourself in the tranquility of nature.",
    ageGroup: "12+",
    imageUrl: "https://media.istockphoto.com/id/1126265493/photo/canicross-exercises-man-runs-with-his-beagle-dog-at-sunny-morning.jpg?s=612x612&w=0&k=20&c=2dsmYX5620KhC-Jjry1WDlLJLZ_11twHnYIJbc2y83M=",
    whatsappMessage: "I'd like to book the Nature Hike activity.",
  },
];


  return (
    <section className="py-20 bg-gray-50" id="activities">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00627B] mb-2"><span className='text-black'>Our</span> Activities</h2>
        <p className="text-xl text-gray-700 mt-2">Unique experiences for all ages, waiting for you to explore!</p>
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
