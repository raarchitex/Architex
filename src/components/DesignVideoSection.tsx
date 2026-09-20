import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export function DesignVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const constructionPhases = [
    { label: 'Groundworks & Footings', detail: 'Trench excavation & damp proofing' },
    { label: 'Structural Brick & Block', detail: 'Thermal cavity wall & RSJ steel framing' },
    { label: 'Roof Framing & Slate', detail: 'Timber trusses & weather membrane' },
    { label: 'Architectural Glazing', detail: 'Aluminum bi-folds & flush rooflights' }
  ];

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  return (
    <section
      id="uk-residential-construction-video"
      className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e5e7eb] w-full"
      aria-labelledby="construction-video-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
              UK RESIDENTIAL CONSTRUCTION
            </span>
          </div>
          <h2
            id="construction-video-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#111827] tracking-tight"
          >
            Watch a modern UK residential home being built from the ground up.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
            Follow the complete real-life transformation from site excavation, foundation trenches, and structural masonry to roof trusses and architectural glazing.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full rounded-sm overflow-hidden bg-[#111827] border border-[#e5e7eb] shadow-[0_8px_30px_rgb(0,0,0,0.08)] group">
          {/* Responsive 16:9 Aspect Ratio Container */}
          <div className="relative w-full pb-[56.25%] sm:pb-[52%] max-h-[720px]">
            {/* HTML5 Native Video Player */}
            <video
              ref={videoRef}
              src="/videos/design.mp4"
              poster="/videos/design-poster.jpg"
              title="UK Residential Construction Video Preview"
              controls={isPlaying}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => {}}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {!isPlaying && (
              <div
                onClick={handleStartPlay}
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
              >
                {/* Poster Background */}
                <img
                  src="/videos/design-poster.jpg"
                  alt="UK Residential Construction Video Preview"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.88] group-hover:scale-[1.01] group-hover:brightness-[0.95] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />

                {/* Big Custom Play Button */}
                <button
                  type="button"
                  id="play-construction-video"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartPlay();
                  }}
                  className="relative z-20 flex items-center gap-3.5 px-6 sm:px-8 py-4 bg-[#D01020] text-white font-mono font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#b00d1b] transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Play UK residential construction video"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                  </div>
                  <span>Play Construction Video</span>
                </button>

                {/* Video Info Overlay Banner */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-wrap items-center justify-between text-white/90 gap-3 pointer-events-none">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#D01020] animate-pulse" />
                    <span>Real UK Residential Site Construction</span>
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
                    1080p HD &bull; Full Process
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Construction Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {constructionPhases.map((phase, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-sm transition-colors hover:border-[#D01020]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold text-[#D01020] uppercase">
                  0{idx + 1}
                </span>
                <span className="text-xs font-bold text-[#111827]">
                  {phase.label}
                </span>
              </div>
              <p className="text-[11px] text-[#6b7280] font-light">
                {phase.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
