import { Users, UserCheck, BarChart3, ShieldCheck, ClipboardList, BookOpen } from "lucide-react";

const features = [
  {
    title: "Manage Students",
    description:
      "Add, update and track student records, attendance, and academic performance easily.",
    icon: <Users size={28} />,
  },
  {
    title: "Manage Teachers",
    description:
      "Assign classes, manage subjects, and monitor teacher performance efficiently.",
    icon: <UserCheck size={28} />,
  },
  {
    title: "Attendance Tracking",
    description:
      "Track daily attendance with automated reports and real-time updates.",
    icon: <ClipboardList size={28} />,
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate detailed academic and performance reports instantly.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Role-Based Access",
    description:
      "Separate dashboards for Admin, Teacher, and Student with secure permissions.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Course Management",
    description:
      "Organize subjects, classes, and academic sessions smoothly.",
    icon: <BookOpen size={28} />,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Powerful Features to Manage Your School
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Everything you need to streamline school management,
          improve productivity, and simplify daily operations.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
