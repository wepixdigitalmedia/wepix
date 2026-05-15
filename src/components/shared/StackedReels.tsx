import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: (element?: HTMLElement) => void;
      };
    };
  }
}

const InstagramPlaceholder = ({
  isNext,
  thumbnailSrc,
}: {
  isNext?: boolean;
  thumbnailSrc?: string;
}) => (
  <div
    className={`w-full h-full bg-card flex flex-col items-center justify-center p-6 border border-border/50 rounded-2xl transition-all duration-300 ${isNext ? "opacity-100 scale-100" : "opacity-60 scale-95"} relative overflow-hidden`}
  >
    {thumbnailSrc ? (
      <>
        <img src={thumbnailSrc} alt="Reel preview" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mt-auto w-full pb-6 text-center">
          <div className="text-[0.875rem] font-display font-medium text-white/80 tracking-wide uppercase">
            Swipe or Click to Play
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex items-center gap-4 w-full mb-10">
          <div className="w-12 h-12 rounded-full bg-muted/50 animate-pulse" />
          <div className="space-y-3 flex-1">
            <div className="h-4 w-32 bg-muted/50 animate-pulse rounded" />
            <div className="h-3 w-20 bg-muted/50 animate-pulse rounded" />
          </div>
        </div>
        
        <div className="relative group/icon">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-150 animate-pulse" />
          <div className="relative w-16 h-16 text-primary/10 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </div>
        </div>

        <div className="mt-12 text-[0.875rem] font-display font-medium text-primary/40 tracking-wide uppercase">
          Swipe or Click to Play
        </div>
        
        <div className="mt-auto w-full space-y-4 pb-4">
          <div className="h-3.5 w-[90%] bg-muted/50 animate-pulse rounded" />
          <div className="h-3.5 w-[70%] bg-muted/50 animate-pulse rounded" />
        </div>
      </>
    )}
  </div>
);

const InstagramEmbed = ({ url, isActive, thumbnailSrc }: { url: string; isActive: boolean; thumbnailSrc?: string }) => {
  if (!isActive) return <InstagramPlaceholder isNext={true} thumbnailSrc={thumbnailSrc} />;

  return (
    <blockquote
      className="instagram-media w-full h-full bg-background"
      data-instgrm-permalink={`${url}/?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: '0',
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ padding: '16px' }}>
        <a
          href={`${url}/?utm_source=ig_embed&utm_campaign=loading`}
          style={{ background: '#FFFFFF', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifySelf: 'center' }}>
              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
          <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
          </div>
        </a>
      </div>
    </blockquote>
  );
};

// Real Instagram Reels provided by user
const reels = [
  "https://www.instagram.com/reel/DNp9gcjPwDV",
  "https://www.instagram.com/reel/DN3fale5hKt",
  "https://www.instagram.com/reel/DNx8hjb5hYl",
  "https://www.instagram.com/reel/DN8XF1fE1vZ",
  "https://www.instagram.com/reel/DNvbR9XZM3e",
];

export function StackedReels() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center item active

  // Use a ref to prevent accidental multiple swaps
  const lastSwapTime = useRef(0);

  const swap = (direction: 'next' | 'prev') => {
    const now = Date.now();
    if (now - lastSwapTime.current < 400) return; // Debounce swaps

    if (direction === 'next' && activeIndex < reels.length - 1) {
      setActiveIndex(prev => prev + 1);
      lastSwapTime.current = now;
    } else if (direction === 'prev' && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
      lastSwapTime.current = now;
    }
  };

  // Thumbnails for inactive reel cards (keyed by the card index `i`)
  // Mapping requested by user:
  // - reel-card-3: first image   -> reel-thumb-1
  // - reel-card-4: second image  -> reel-thumb-2
  // - reel-card-1: third image   -> reel-thumb-3
  // - reel-card-0: fourth image  -> reel-thumb-4
  const inactiveThumbnailByIndex: Record<number, string> = {
    0: "/reel-thumb-4.png",
    1: "/reel-thumb-3.png",
    3: "/reel-thumb-1.png",
    4: "/reel-thumb-2.png",
  };

  // Load Instagram embed script and process embeds
  useEffect(() => {
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (window.instgrm) {
      setTimeout(() => {
        const activeContainer = document.getElementById(`reel-container-${activeIndex}`);
        if (activeContainer) {
          window.instgrm?.Embeds.process(activeContainer);
        }
      }, 50);
    }
  }, [activeIndex]);

  return (
    <div className="w-full flex justify-center lg:justify-start items-center min-h-[min(64vw,300px)] sm:min-h-[min(70vw,380px)] md:min-h-[560px] py-3 sm:py-4 md:py-10 touch-none">
      <motion.div 
        className="relative w-[280px] md:w-[320px] aspect-[9/16] z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPanEnd={(_, info) => {
          const threshold = 30;
          if (info.offset.x < -threshold) swap('next');
          else if (info.offset.x > threshold) swap('prev');
        }}
      >
        {reels.map((url, i) => {
          // Calculate offset relative to the ACTIVE index, not just the center
          const offset = i - activeIndex; 
          const isActive = i === activeIndex;
          const thumbnailSrc = inactiveThumbnailByIndex[i];
          
          return (
            <motion.div
              key={i}
              id={`reel-card-${i}`}
              className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background origin-bottom cursor-pointer transition-shadow`}
              style={{ 
                willChange: "transform, opacity",
              }}
              animate={{
                x: (isHovered || activeIndex !== 2) ? offset * 50 : offset * 20,
                y: (isHovered || activeIndex !== 2) ? Math.abs(offset) * 15 : Math.abs(offset) * 5,
                scale: (isHovered || activeIndex !== 2) ? 1 - Math.abs(offset) * 0.05 : 1 - Math.abs(offset) * 0.03,
                rotateZ: (isHovered || activeIndex !== 2) ? offset * 6 : offset * 2,
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 25,
                mass: 0.6
              }}
              onClick={() => {
                if (activeIndex !== i) {
                  setActiveIndex(i);
                }
              }}
            >
              {/* Overlay to darken background cards to create depth */}
              <motion.div 
                className="absolute inset-0 bg-black/40 z-20 pointer-events-none"
                animate={{ opacity: activeIndex === i ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Wrapper. Disables pointer events if it's not the active card to allow clicking to bring it forward */}
              <div 
                id={`reel-container-${i}`} 
                className={`w-full h-full bg-muted flex items-center justify-center overflow-y-auto ${activeIndex !== i ? 'pointer-events-none' : ''} [&>iframe]:!min-w-0 [&>iframe]:!w-full [&>iframe]:!h-full [&>iframe]:!m-0 [&>iframe]:!border-none`}
              >
                <InstagramEmbed url={url} isActive={isActive} thumbnailSrc={thumbnailSrc} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
