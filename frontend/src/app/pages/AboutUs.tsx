export function AboutUs() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold mb-4">About InHire</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We believe finding the right job shouldn't be complicated. InHire combines cutting-edge
            machine learning with an intuitive swipe interface to make job discovery fast, smart, and engaging.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're a job seeker looking for your next opportunity or a company searching for top talent,
            InHire brings both sides together seamlessly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How InHire Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Create Profile', desc: 'Sign up and build your profile with skills, experience, and upload your resume.' },
              { step: '2', title: 'Swipe & Match', desc: 'Browse jobs with AI-powered match scores. Swipe right to apply instantly.' },
              { step: '3', title: 'Get Hired', desc: 'Companies review your profile and resume. Land interviews faster.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">Have questions or feedback? We'd love to hear from you.</p>
          <a href="mailto:hello@inhire.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            hello@inhire.com
          </a>
        </div>
      </div>
    </div>
  );
}
