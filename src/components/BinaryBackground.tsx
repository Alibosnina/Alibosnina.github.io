
import React, { useEffect, useState } from 'react';

const BinaryBackground = () => {
  const [binaryStrings, setBinaryStrings] = useState<string[]>([]);

  useEffect(() => {
    const generateBinaryString = () => {
      return Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('');
    };

    const strings = Array(10).fill(0).map(() => ({
      value: generateBinaryString(),
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 10}s`
    }));

    setBinaryStrings(strings.map(s => s.value));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {binaryStrings.map((binary, index) => (
        <div
          key={index}
          className="absolute text-[#00FF00] whitespace-nowrap animate-fade-in"
          style={{
            left: `${(index * 10)}%`,
            top: '-20px',
            animation: `falling ${5 + (index % 5)}s linear infinite`,
            animationDelay: `${index * 0.5}s`
          }}
        >
          {binary}
        </div>
      ))}
    </div>
  );
};

export default BinaryBackground;