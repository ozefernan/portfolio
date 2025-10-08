const Writing = () => {
  const articles = [
    {
      date: 'Mar 18, 2024',
      title: 'Accessible Animations in React',
      description: 'How to create performant animations that respect user preferences for reduced motion.',
      link: '#',
      external: 'CSS-Tricks'
    },
    {
      date: 'Jan 10, 2024',
      title: 'Building a Design System from Scratch',
      description: 'A comprehensive guide to creating a scalable and maintainable design system with React and TypeScript.',
      link: '#',
      external: 'Smashing Magazine'
    },
    {
      date: 'Nov 5, 2023',
      title: 'Web Accessibility Best Practices',
      description: 'Essential techniques for building accessible web applications that everyone can use.',
      link: '#',
      external: 'A List Apart'
    }
  ]

  return (
    <section id="writing" className="min-h-screen flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-200 mb-12">
          Writing
        </h2>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative grid lg:grid-cols-4 gap-2 lg:gap-8 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50 p-6 rounded-lg hover:bg-slate-800/50 hover:shadow-lg"
            >
              <div className="lg:col-span-1 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {article.date}
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-xl font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  {article.title}
                  <svg className="w-5 h-5 -translate-y-1 translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="mt-2 text-slate-400 leading-relaxed">
                  {article.description}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {article.external}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Writing
