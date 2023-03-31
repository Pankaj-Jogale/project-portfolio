import "./text.scss";

import { useState, useEffect } from "react";
const Text = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Software Developer", "Effective Problem Solver"];
  const typingDelay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), typingDelay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setInterval(() => handleTyping(), typingSpeed);
    return () => clearInterval(typingInterval);
  }, [text, isDeleting, typingSpeed, loopNum, textArray]);
  return (
    <div className="new">
      <h1 className="text">{text}</h1>
    </div>
  );
};

export default Text;
