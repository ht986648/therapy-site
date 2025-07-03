import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Optional: Add background decorative elements here if desired */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Services & Specialties</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            Dr. Blake offers compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma. Each session is tailored to your unique needs, whether in-person or virtual.
          </p>
        </div>

        {/* Three focus areas in a responsive flex layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
          
          {/* Focus Area 1 */}
          <div className="max-w-xs">
            <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Anxiety & Stress Management"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Anxiety & Stress Management</h3>
            <p className="text-gray-600 text-sm px-2">
              Learn practical tools to manage anxiety, reduce stress, and regain a sense of calm and control in your daily life. Dr. Blake uses evidence-based techniques to help you break free from worry and overwhelm, fostering resilience and peace of mind.
            </p>
          </div>

          {/* Focus Area 2 */}
          <div className="max-w-xs">
            <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Relationship Counseling"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Relationship Counseling</h3>
            <p className="text-gray-600 text-sm px-2">
              Strengthen your relationships, improve communication, and resolve conflicts with compassionate guidance. Whether you're an individual or a couple, Dr. Blake helps you build deeper, healthier connections and navigate life's challenges together.
            </p>
          </div>

          {/* Focus Area 3 */}
          <div className="max-w-xs">
            <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
              <img
                src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Trauma Recovery"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trauma Recovery</h3>
            <p className="text-gray-600 text-sm px-2">
              Heal from past trauma in a safe, supportive environment. Dr. Blake combines trauma-informed care with mindfulness and CBT to help you process difficult experiences, reclaim your sense of self, and move forward with hope and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
