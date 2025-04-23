"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface MessageData {
  content: string;
  isUser?: boolean;
}

interface MessageProps extends MessageData {
  onAnimationComplete?: () => void;
}

const Message = ({
  isUser = false,
  content,
  onAnimationComplete,
}: MessageProps) => {
  const [stage, setStage] = useState<"bubble" | "typing" | "text">("bubble");
  const [isTextComplete, setIsTextComplete] = useState(false);

  useEffect(() => {
    if (stage === "bubble") {
      const timer = setTimeout(() => {
        setStage("typing");
      }, 100);
      return () => clearTimeout(timer);
    }
    if (stage === "typing") {
      const timer = setTimeout(() => {
        setStage("text");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "text" && isTextComplete) {
      onAnimationComplete?.();
    }
  }, [stage, isTextComplete, onAnimationComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: isUser ? 20 : -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-start gap-2 ${
        isUser ? "flex-row" : "flex-row-reverse"
      } mb-4`}
    >
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${
          isUser ? "bg-muted" : "bg-blue-500"
        }`}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`text-sm md:text-lg font-semibold ${
            isUser ? "text-muted-foreground" : "text-white"
          }`}
        >
          {isUser ? "B" : "E"}
        </motion.span>
      </div>

      <div className="flex flex-col gap-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`flex flex-col max-w-sm ${
            isUser
              ? "bg-muted text-gray-800 rounded-t-2xl rounded-r-2xl"
              : "bg-blue-500 text-white rounded-t-2xl rounded-l-2xl"
          } px-4 py-3 mt-2 shadow-sm`}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-xs mb-1 ${
              isUser ? "text-gray-500" : "text-blue-100"
            }`}
          >
            {isUser ? "Bonnie Green" : "Expertice"}
          </motion.span>
          <motion.div className="text-sm">
            {stage === "typing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-1.5"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-current"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}

            {stage === "text" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {content.split("").map((char, i) => (
                  <motion.span
                    className="text-sm md:text-md"
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: i * 0.03,
                    }}
                    onAnimationComplete={() => {
                      if (i === content.length - 1) {
                        setIsTextComplete(true);
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ChatPreviewProps {
  messages: MessageData[];
}

const ChatPreview = ({ messages = [] }: ChatPreviewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [currentMessageComplete, setCurrentMessageComplete] = useState(true);

  const showNextMessage = useCallback(() => {
    if (visibleMessages < messages.length && currentMessageComplete) {
      setCurrentMessageComplete(false);
      setVisibleMessages((prev) => prev + 1);
    }
  }, [messages.length, visibleMessages, currentMessageComplete]);

  useEffect(() => {
    if (isInView && visibleMessages === 0) {
      showNextMessage();
    }
  }, [isInView, showNextMessage, visibleMessages]);

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 "
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0"
        >
          <div className="space-y-6">
            {messages.slice(0, visibleMessages).map((message, index) => (
              <Message
                key={index}
                isUser={message.isUser}
                content={message.content}
                onAnimationComplete={() => {
                  if (index === visibleMessages - 1) {
                    setCurrentMessageComplete(true);
                    setTimeout(() => {
                      showNextMessage();
                    }, 500);
                  }
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatPreview;
