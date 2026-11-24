import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Boy } from './Boy';
import { Shoes, Timer } from './Props';

export const Step2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps });
  const shoesProgress = spring({ frame: frame - 25, fps });
  const timerProgress = spring({ frame: frame - 48, fps });
  const boyProgress = spring({ frame: frame - 70, fps });
  const bubbleProgress = spring({ frame: frame - 100, fps });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F0F7FF',
        backgroundImage: 'radial-gradient(#C9DDF5 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 40,
          right: 40,
          padding: 30,
          borderRadius: 25,
          backgroundColor: '#FF6B00',
          color: 'white',
          fontSize: 48,
          fontWeight: 'bold',
          textAlign: 'center',
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -180}px)`,
        }}
      >
        STEP 2 - 30 MIN WALK
      </div>

      <div
        style={{
          position: 'absolute',
          top: 280,
          left: 60,
          right: 60,
          height: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 40,
          backgroundColor: 'white',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ opacity: shoesProgress, transform: `scale(${shoesProgress})` }}>
          <Shoes />
        </div>
        <div style={{ opacity: timerProgress, transform: `scale(${timerProgress})` }}>
          <Timer />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 20,
          opacity: boyProgress,
          transform: `translateY(${(1 - boyProgress) * 750}px) scale(1.4)`,
          transformOrigin: 'bottom left',
        }}
      >
        <Boy />
      </div>

      <div
        style={{
          position: 'absolute',
          right: 40,
          bottom: 120,
          maxWidth: 550,
          padding: 30,
          borderRadius: 30,
          backgroundColor: 'white',
          fontSize: 40,
          fontWeight: 'bold',
          opacity: bubbleProgress,
          transform: `scale(${bubbleProgress})`,
        }}
      >
        Roz 30 min walk BP ko 5-8 point tak kam karti hai!
      </div>
    </AbsoluteFill>
  );
};
