import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Boy } from './Boy';
import { SaltSpoon, ChipsPacket, KetchupBottle } from './Props';

export const BpVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps });
  const saltProgress = spring({ frame: frame - 25, fps });
  const chipsProgress = spring({ frame: frame - 42, fps });
  const ketchupProgress = spring({ frame: frame - 59, fps });
  const boyProgress = spring({ frame: frame - 78, fps });
  const bubbleProgress = spring({ frame: frame - 110, fps });

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
      <div style={{
        position: 'absolute', top: 60, left: 40, right: 40,
        backgroundColor: '#FF6B00', padding: 30, borderRadius: 25,
        textAlign: 'center', color: 'white', fontSize: 48, fontWeight: 'bold',
        opacity: titleProgress,
        transform: `translateY(${(1 - titleProgress) * -180}px)`,
      }}>
        STEP 1 - HIDDEN SALT BAND KARO
      </div>

      <div style={{
        position: 'absolute', top: 280, left: 60, right: 60,
        backgroundColor: 'white', borderRadius: 40,
        height: 900, display: 'flex',
        justifyContent: 'space-around', alignItems: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ opacity: saltProgress, transform: `scale(${saltProgress})` }}>
          <SaltSpoon />
        </div>
        <div style={{ opacity: chipsProgress, transform: `scale(${chipsProgress})` }}>
          <ChipsPacket />
        </div>
        <div style={{ opacity: ketchupProgress, transform: `scale(${ketchupProgress})` }}>
          <KetchupBottle />
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 20,
        transform: `translateY(${(1 - boyProgress) * 750}px) scale(1.4)`,
        transformOrigin: 'bottom left',
        opacity: boyProgress,
      }}>
        <Boy />
      </div>

      <div style={{
        position: 'absolute', bottom: 120, right: 40,
        backgroundColor: 'white', padding: 30, borderRadius: 30,
        fontSize: 40, fontWeight: 'bold', maxWidth: 550,
        opacity: bubbleProgress,
        transform: `scale(${bubbleProgress})`,
      }}>
        Chips, ketchup me chhupa namak hi BP badhata hai!
      </div>
    </AbsoluteFill>
  );
};
