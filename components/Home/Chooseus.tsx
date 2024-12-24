import React from 'react';

const Chooseus = () => {
  return (
    <section className="container px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose NextW for Web Development?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Custom Design",
            description: "Tailored solutions that match your brand identity",
            icon: "🎨",
          },
          {
            title: "SEO Optimization",
            description: "Boost your online visibility and reach",
            icon: "🚀",
          },
          {
            title: "Fast Performance",
            description: "Lightning-fast websites that keep users engaged",
            icon: "⚡",
          },
          {
            title: "Responsive Development",
            description: "Perfect display on all devices and screen sizes",
            icon: "📱",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chooseus;
