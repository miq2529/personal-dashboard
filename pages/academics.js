export default function Academics() {
  const academics = [
    {
      Degree: "Bachelor of Computer Applications (BCA)",
      Institute: "Indira College of Commerce and Science, Pune",
      Year: "2022 - 2025",
      Details: "Specialized in software development, database management, and web technologies."
    },
    {
      Degree: "Higher Secondary School",
      Institute: "Rajarshi Shahu College, Latur",
      Year: "2021 - 2022",
      Details: "Focus on Accounts and Economics in a Commerce Field."
    },
    {
      Degree: "Secondary School",
      Institute: "Mahatma Gandhi Vidyalaya, Kategaon",
      Year: "2019 - 2020",
      Details: "Focus on General Studies"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Academics</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Academic Qualifications</h2>
        <ul className="space-y-6">
          {academics.map(({ Degree, Institute, Year, Details }) => (
            <li key={Degree} className="bg-white shadow-md rounded p-4">
              <h3 className="text-xl font-semibold">{Degree}</h3>
              <p className="text-gray-700 italic">{Institute} — <span className="font-medium">{Year}</span></p>
              <p className="mt-2 text-gray-600">{Details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
