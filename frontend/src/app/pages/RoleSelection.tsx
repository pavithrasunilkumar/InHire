import { useNavigate } from 'react-router';
import { Briefcase, Building2, User } from 'lucide-react';

export function RoleSelection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InHire</h1>
          </div>
          <p className="text-gray-600 text-lg">Select how you want to use InHire</p>
        </div>
        <div className="space-y-4">
          <button onClick={() => navigate('/signup')}
            className="w-full bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-900">Job Seeker</h2>
              <p className="text-gray-600">Find your dream job with AI-powered matching</p>
            </div>
          </button>
          <button onClick={() => navigate('/company-signup')}
            className="w-full bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-600">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-900">Job Giver</h2>
              <p className="text-gray-600">Post jobs and find the best talent</p>
            </div>
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-blue-600 font-semibold hover:underline">Sign In</button>
        </p>
      </div>
    </div>
  );
}
