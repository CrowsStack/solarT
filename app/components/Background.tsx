'use client';

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-black">
        <div className="absolute inset-0" style={{ opacity: 0.4 }}>
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-2000" />
      </div>
    </div>
  );
};

export default Background;
