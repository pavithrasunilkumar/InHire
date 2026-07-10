

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SplashScreenProps {
  /** Called once the intro animation is done and the app should mount */
  onFinish: () => void;
  /** How long the splash stays up, in ms (default 2200) */
  durationMs?: number;
}

export function SplashScreen({ onFinish, durationMs = 2200 }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => setVisible(false), durationMs);
    // give the exit animation (400ms) time to play before unmounting
    const finishTimer = setTimeout(() => onFinish(), durationMs + 400);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
    };
  }, [durationMs, onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 px-6 text-center"
          >
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight">
              InHire
            </span>
            <span className="text-sm sm:text-base text-white/60">
              Project by{" "}
              <span className="text-white/90 font-medium">
                Pavithra Sunilkumar
              </span>
            </span>

            {/* simple loading indicator */}
            <motion.div
              className="mt-4 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full w-1/3 rounded-full bg-white/80"
                animate={{ x: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface WatermarkProps {
  /** Where the badge sits. Default bottom-right. */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  href?: string;
}

const positionClasses: Record<NonNullable<WatermarkProps["position"]>, string> = {
  "bottom-right": "bottom-3 right-3",
  "bottom-left": "bottom-3 left-3",
  "top-right": "top-3 right-3",
  "top-left": "top-3 left-3",
};

export function Watermark({
  position = "bottom-right",
  href = "https://github.com/pavithrasunilkumar",
}: WatermarkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-[9998] ${positionClasses[position]} 
        rounded-full border border-white/10 bg-black/70 backdrop-blur-sm
        px-3 py-1.5 text-xs text-white/70 hover:text-white/95 hover:border-white/30
        transition-colors duration-200 select-none pointer-events-auto`}
    >
      Built by Pavithra Sunilkumar
    </a>
  );
}
