import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Briefcase, User, Lock, Sparkles, Target, FileCheck } from 'lucide-react';
import { login } from '../api';

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(username, password);
      if (data.user.role === 'company') {
        navigate('/company/dashboard');
      } else {
        navigate('/home');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-stretch bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* LEFT SIDE — unchanged login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InHire</h1>
            </div>
            <p className="text-gray-600 text-lg">Welcome back!</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
            {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your username" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your password" required />
                </div>
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-60">
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">Don't have an account?{' '}
                <Link to="/role-selection" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — explanation panel, hidden on small screens */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            Swipe your way to your next opportunity
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            InHire turns job hunting into something you'll actually want to do —
            swipe through roles matched to your skills and apply in a tap.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/15 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Swipe-style discovery</h3>
                <p className="text-blue-100 text-sm">
                  Browse jobs like never before — swipe right to apply, left to skip.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/15 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">ML-powered match score</h3>
                <p className="text-blue-100 text-sm">
                  See exactly how well your skills fit each role, powered by real matching algorithms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/15 rounded-lg flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">One-tap applications</h3>
                <p className="text-blue-100 text-sm">
                  Your resume is sent automatically the moment you apply — no re-uploading, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
