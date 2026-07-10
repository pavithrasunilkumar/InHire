import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { SplashScreen, Watermark } from './components/BrandGate';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <RouterProvider router={router} />
      <Watermark />
    </>
  );
}
