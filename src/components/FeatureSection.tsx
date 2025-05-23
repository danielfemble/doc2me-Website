
import { Clock, Zap, Medal, HeartPulse, BrainCircuit, ShieldCheck } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="feature-card opacity-0 animate-fade-in p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
    <div className="feature-icon mb-4 text-doc-purple">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-doc-black">{title}</h3>
    <p className="text-doc-gray">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [{
    icon: <Clock size={24} />,
    title: "Save Time",
    description: "Create accurate patient education materials in minutes instead of hours."
  }, {
    icon: <Zap size={24} />,
    title: "Boost Online Presence",
    description: "Increase your visibility with personalized health content that ranks on search engines."
  }, {
    icon: <Medal size={24} />,
    title: "Build Authority",
    description: "Establish yourself as a trusted expert in your field with high-quality health information."
  }, {
    icon: <HeartPulse size={24} />,
    title: "Better Patient Outcomes",
    description: "Improve adherence and results with easy-to-understand health education materials."
  }, {
    icon: <BrainCircuit size={24} />,
    title: "AI-Powered Content",
    description: "Leverage advanced AI to create medically accurate and personalized patient materials."
  }, {
    icon: <ShieldCheck size={24} />,
    title: "Medically Verified",
    description: "All content is medically accurate and follows best practices in health communication."
  }];
  
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Doc2Me</h2>
          <p className="text-lg text-doc-gray max-w-2xl mx-auto">
            Our platform helps medical professionals create personalized patient education materials in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
