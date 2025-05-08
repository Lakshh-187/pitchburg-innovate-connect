
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
}

const stats: StatItem[] = [
  {
    label: "Pitches Submitted",
    value: 1250,
    prefix: "",
    suffix: "+"
  },
  {
    label: "Students Involved",
    value: 780,
    prefix: "",
    suffix: ""
  },
  {
    label: "Awards Won",
    value: 56,
    prefix: "",
    suffix: ""
  },
  {
    label: "Funding Secured",
    value: 500000,
    prefix: "$",
    suffix: ""
  }
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countValues, setCountValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds for the animation
      const stepTime = 20; // Update every 20ms
      const steps = duration / stepTime;
      const stepValue = stat.value / steps;
      let currentStep = 0;

      const formatValue = (value: number) => {
        if (stat.value >= 10000) {
          // If value is large (like the funding), show as K or M
          return Math.round(value / 1000);
        }
        return Math.round(value);
      };

      return setInterval(() => {
        if (currentStep < steps) {
          currentStep++;
          const newValue = formatValue(Math.min(stepValue * currentStep, stat.value));
          setCountValues(prev => {
            const newCounts = [...prev];
            newCounts[index] = newValue;
            return newCounts;
          });
        } else {
          clearInterval(intervals[index]);
        }
      }, stepTime);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-pitchburg-dark-purple text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-300 max-w-2xl">
            The numbers behind our growing community of innovators
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-opacity-10 bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-pitchburg-purple mb-2">
                  {stat.prefix}
                  {isVisible ? (
                    stat.value >= 10000 ? (
                      <>{countValues[index]}K</>
                    ) : (
                      countValues[index]
                    )
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
