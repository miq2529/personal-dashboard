export default function Profile() {
  return (
    <section className="card max-w-3xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg animate-fadeIn">
      <div className="flex items-center space-x-6">
        <img
          src="/profile.jpg"
          alt="Mustaqeem Qureshi"
          className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-purple-700 mb-2">Mustaqeem Qureshi</h1>
          <p className="text-gray-600 mb-1">
            A highly motivated and adaptable developer passionate about building impactful applications.
          </p>
          <p className="text-gray-600">Email:- qureshimustaqeem2529@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
