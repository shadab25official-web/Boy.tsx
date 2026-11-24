import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Boy } from './Boy';
import { Family, RecapCard, ShareButton } from './Props';

export const CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps });
  const shareProgress = spring({ frame: frame - 25, fps });
  const familyProgress = spring({ frame: frame - 45, fps });
  const recapProgress = spring({ frame: frame - 65, fps });
  const boyProgress = spring({ frame: frame - 85, fps });
  const bubbleProgress = spring({ frame: frame - 115, fps });

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
        BP DIET COMMENT KARO
      </div>

      <div
        style={{
          position: 'absolute',
          top: 280,
          left: 40,
          right: 40,
          height: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 40,
          backgroundColor: 'white',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ opacity: shareProgress, transform: `scale(${shareProgress})` }}>
          <ShareButton />
        </div>
        <div style={{ opacity: familyProgress, transform: `scale(${familyProgress})` }}>
          <Family />
        </div>
        <div style={{ opacity: recapProgress, transform: `scale(${recapProgress})` }}>
          <RecapCard />
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
          maxWidth: 620,
          padding: 30,
          borderRadius: 30,
          backgroundColor: 'white',
          fontSize: 38,
          fontWeight: 'bold',
          opacity: bubbleProgress,
          transform: `scale(${bubbleProgress})`,
        }}
      >
        Comment me likho BP DIET, full diet chart bhej dunga!
      </div>
    </AbsoluteFill>
  );
};
