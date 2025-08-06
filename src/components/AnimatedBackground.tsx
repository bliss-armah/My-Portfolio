import { motion } from "framer-motion";

const AnimatedBackground = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className || ""}`}>
      {/* Main animated container */}
      <motion.div
        className="relative w-full h-full rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(135deg, 
              var(--clr-primary-6) 0%, 
              var(--clr-primary-5) 35%, 
              var(--clr-primary-4) 70%, 
              var(--clr-primary-3) 100%)`,
          }}
        />

        {/* Floating circles */}
        <motion.div
          className="absolute top-4 left-4 w-8 h-8 rounded-full"
          style={{ background: "var(--clr-primary-10)" }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-16 right-8 w-6 h-6 rounded-full"
          style={{ background: "var(--clr-primary-10)" }}
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-4 h-4 rounded-full"
          style={{ background: "var(--clr-primary-10)" }}
          animate={{
            y: [0, -10, 0],
            x: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Central code-like pattern */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-center">
            <motion.div
              className="text-6xl font-bold mb-4"
              style={{ color: "var(--clr-primary-1)" }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              &lt;/&gt;
            </motion.div>
            <motion.div
              className="w-16 h-1 mx-auto rounded"
              style={{ background: "var(--clr-primary-1)" }}
              animate={{
                scaleX: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          </div>
        </motion.div>

        {/* Corner decorations */}
        <motion.div
          className="absolute top-0 right-0 w-0 h-0"
          style={{
            borderLeft: "30px solid transparent",
            borderBottom: "30px solid var(--clr-primary-10)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-0 h-0"
          style={{
            borderRight: "25px solid transparent",
            borderTop: "25px solid var(--clr-primary-10)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </motion.div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: "3px solid var(--clr-primary-5)",
          borderRadius: "var(--radius)",
        }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(233, 185, 73, 0.4)",
            "0 0 0 10px rgba(233, 185, 73, 0)",
            "0 0 0 0 rgba(233, 185, 73, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
