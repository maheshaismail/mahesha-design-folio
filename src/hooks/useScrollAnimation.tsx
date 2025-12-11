import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animated wrapper component for easy use
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "blur-in";
  delay?: number;
  duration?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    };

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        };
      case "fade-in":
        return baseStyles;
      case "slide-left":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-60px)",
        };
      case "slide-right":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(60px)",
        };
      case "scale-up":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
        };
      case "blur-in":
        return {
          ...baseStyles,
          filter: isVisible ? "blur(0px)" : "blur(10px)",
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        };
      default:
        return baseStyles;
    }
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
};

export default useScrollAnimation;
