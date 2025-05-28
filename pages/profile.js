export default function Profile() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-lg animate-fadeIn">
        <img
          src="/profile.jpg"
          alt="Mustaqeem Qureshi"
          className="w-40 h-40 rounded-full border-4 border-purple-400 shadow-lg mx-auto mb-6"
        />
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-center">
          Mustaqeem Qureshi
        </h1>
        <p className="text-gray-700 text-center mb-3">
          A highly motivated and adaptable developer passionate about building impactful applications.
        </p>
        <p className="text-gray-700 text-center">
          Email:- qureshimustaqeem2529@gmail.com
          Mobile No:- +91 9370322939
        </p>
      </div>
    </section>
  );
}

