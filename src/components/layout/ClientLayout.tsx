"use client";

import { useState } from "react";
import SmoothScrolling from "./SmoothScrolling";
import CustomCursor from "./CustomCursor";
import CursorGlow from "../ui/CursorGlow";
import Navbar from "./Navbar";
import BootSequence from "./BootSequence";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <CustomCursor />
      <CursorGlow />
      
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <SmoothScrolling>
              <main className="flex-grow">{children}</main>
            </SmoothScrolling>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
