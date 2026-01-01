import ActivityCard from "./ActivityCard";

const activities = [
  {
    id: 1,
    title: "Wildlife Viewing",
    image: "https://img.freepik.com/premium-photo/tourists-photographing-wild-animals-wild-life-safari-madikwe-game-reserve-south-africa_1048944-3980472.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    desc: "Observe native Arabian wildlife including Arabian oryx, gazelles, and rare bird species in their natural habitat.",
    details: "Guided tours through designated observation points with expert naturalists. Learn about conservation efforts and ecosystem balance.",
    ageGroup: "All ages",
    duration: "1-2 hours",
    bestFor: "Families, Nature enthusiasts",
    whatsappMessage: "Hi, I'm interested in Wildlife Viewing at Al Dosari Reserve. Can you provide available time slots?"
  },
  {
    id: 2,
    title: "Safari Tours",
    image: "https://img.freepik.com/premium-photo/couple-taking-bus-tour-feeding-playing-with-giraffe-safari-open-park-zoo_46370-2833.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    desc: "Adventure through the reserve's diverse landscapes in specialized safari vehicles with professional guides.",
    details: "Morning and evening safari options. Includes desert, mountain, and valley routes. Photography stops and refreshments provided.",
    ageGroup: "5+ years",
    duration: "2-3 hours",
    bestFor: "Adventure seekers, Photographers",
    whatsappMessage: "Hello, I'd like to book a Safari Tour at Al Dosari Reserve. Please share tour schedules and pricing."
  },
  {
    id: 3,
    title: "Horse & Camel Riding",
    image: "https://img.freepik.com/premium-photo/man-riding-camel-sand-against-sky-sunset_1048944-19115237.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    desc: "Experience traditional Arabian heritage with guided horse and camel riding sessions suitable for all skill levels.",
    details: "Beginner-friendly training available. Safety equipment provided. Scenic trails through palm groves and desert paths.",
    ageGroup: "7+ years",
    duration: "45-90 minutes",
    bestFor: "Cultural enthusiasts, Families",
    whatsappMessage: "Hi there, I want to book Horse/Camel Riding at Al Dosari Reserve. Are there sessions available this weekend?"
  },
  {
    id: 4,
    title: "Educational Programs",
    image: "https://img.freepik.com/free-photo/full-shot-scouts-with-map-outdoors_23-2149885213.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    desc: "Interactive learning programs designed for schools, universities, and educational institutions.",
    details: "Curriculum-aligned modules covering ecology, conservation, and Arabian wildlife. Hands-on activities and expert-led workshops.",
    ageGroup: "School groups (all grades)",
    duration: "Half-day or Full-day",
    bestFor: "Schools, Universities, Educational groups",
    whatsappMessage: "Hello, our school is interested in Educational Programs at Al Dosari Reserve. Can we discuss available dates?"
  }
];

export default function HomeActivities() {
  const whatsappNumber = "966XXXXXXXXX"; // Replace with actual number

  const handleBookActivity = (activityTitle, message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="activities-section" className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#00627B]">Activities</span> & Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover unforgettable eco-tourism experiences designed for education, adventure, and conservation
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
              onBook={() => handleBookActivity(activity.title, activity.whatsappMessage)}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}