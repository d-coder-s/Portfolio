import React from 'react'

const Developmentprocess = () => {
  return (
    <div> <section className="container px-4 py-12 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
    <div className="max-w-md mx-auto text-center">
      <div className="mb-6">
        <svg
          className="w-16 h-16 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <h3 className="text-xl font-bold mb-2">Development</h3>
        <p className="text-gray-500">
          We follow industry best practices to deliver high-quality solutions
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
      </div>
    </div>
  </section>

  {/* Tech Stack Section */}
  <section className="container px-4 py-12">
    <h2 className="text-3xl font-bold text-center mb-12">
      Tech Stack We Master
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
        >
          <div className="w-12 h-12 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  </section>
</div>
  )
}

export default Developmentprocess