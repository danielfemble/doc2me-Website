
import { useRef, useEffect, useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Baby, Microscope, Clock, Dna, Heart, Activity } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  testimonial: string;
  specialty: string;
  icon: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'IVF Patient',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    rating: 5,
    testimonial: "Even though I only saw my doctor twice during my IVF journey, I felt incredibly supported thanks to Doc2Me. The personalized videos explaining each step of my protocol gave me so much confidence and trust. I could review complex information at my own pace and felt connected to my care team throughout the entire process.",
    specialty: 'IVF Patient',
    icon: <Baby className="w-5 h-5" />
  },
  {
    id: 2,
    name: 'Dr. Michael Rodriguez',
    role: 'Fertility Specialist',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    testimonial: "As a busy fertility clinic, we need efficient ways to educate patients about complex procedures. Doc2Me lets me create concise explanations about fertility preservation options that patients can reference anytime.",
    specialty: 'Egg Freezing',
    icon: <Microscope className="w-5 h-5" />
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    role: 'Reproductive Endocrinologist',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 5,
    testimonial: "Explaining endometriosis treatment options used to take multiple appointments. Now I record personalized videos for each patient's specific case. My patients appreciate having a resource they can review with their partners at home.",
    specialty: 'Endometriosis Care',
    icon: <Dna className="w-5 h-5" />
  },
  {
    id: 4,
    name: 'Dr. Jennifer Torres',
    role: 'Rehabilitation Center Director',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    rating: 5,
    testimonial: "Our rehabilitation center has integrated Doc2Me to help patients understand their recovery journey. The personalized videos have improved therapy adherence by 42% and patients report feeling more confident in their at-home exercises.",
    specialty: 'Physical Rehabilitation',
    icon: <Activity className="w-5 h-5" />
  },
  {
    id: 5,
    name: 'Dr. David Kim',
    role: 'Reproductive Immunologist',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    rating: 5,
    testimonial: "Explaining complex immunological factors in fertility is challenging in a short appointment. Doc2Me allows me to create detailed videos about immunological testing and treatments that patients can review multiple times.",
    specialty: 'Recurrent Pregnancy Loss',
    icon: <Heart className="w-5 h-5" />
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Add auto-rotation for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="testimonials" className="section-container relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-doc-purple/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-doc-blue/10 blur-3xl"></div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-doc-purple-light/40 px-4 py-1.5 rounded-full text-doc-purple text-sm font-medium mb-4">
          <span>Success Stories</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
          Trusted by leading fertility clinics
        </h2>
        <p className="text-doc-gray text-lg">
          Join hundreds of reproductive specialists who are enhancing patient care with Doc2Me.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-0 z-10">
        <div 
          ref={testimonialsRef}
          className="overflow-hidden"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="testimonial-card neo-glass backdrop-blur-md">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-doc-blue/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-doc-black">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-doc-gray">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-doc-gray mb-4 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="bg-doc-purple-light/50 text-doc-purple text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      {testimonial.icon}
                      {testimonial.specialty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-neon hover:bg-gray-50 transition-colors"
            disabled={isAnimating}
          >
            <ArrowLeft className="w-5 h-5 text-doc-black" />
          </button>
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-neon hover:bg-gray-50 transition-colors"
            disabled={isAnimating}
          >
            <ArrowRight className="w-5 h-5 text-doc-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
