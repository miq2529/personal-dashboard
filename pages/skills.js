export default function Skills() {
  const skills = [
    'JavaScript',
    'React.js / Next.js',
    'Tailwind CSS',
    'HTML & CSS',
    'PHP & MySQL',
    'Basic Java',
    'Git & GitHub',
    'PHPMYADMIN',
    'Postman',
    'C Programming',
    'Software Testing'
  ];

  return (
    <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">Skills</h2>
      <ul className="list-disc ml-6 space-y-3 text-gray-800 text-lg">
        {skills.map(skill => (
          <li key={skill} className="hover:text-indigo-500 transition-colors duration-300 cursor-default">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
