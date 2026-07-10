import { useState } from "react";
import { SplashScreen, Watermark } from "./components/BrandGate";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      {/* your existing routes/layout stay exactly as they are */}
      <Watermark />
    </>
  );
}
