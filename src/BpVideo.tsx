import { AbsoluteFill } from 'remotion';
import { Boy } from './Boy';
import { SaltSpoon, ChipsPacket, KetchupBottle } from './Props';

export const BpVideo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#F0F7FF', fontFamily: 'sans-serif' }}>
      {/* UPAR - Orange Title Bar */}
      <div style={{
        position: 'absolute', top: 60, left: 40, right: 40,
        backgroundColor: '#FF6B00', padding: 30, borderRadius: 25,
        textAlign: 'center', color: 'white', fontSize: 48, fontWeight: 'bold'
      }}>
        STEP 1 - HIDDEN SALT BAND KARO
      </div>

      {/* BEECH - White Card + Props */}
      <div style={{
        position: 'absolute', top: 280, left: 60, right: 60,
        backgroundColor: 'white', borderRadius: 40,
        height: 900, display: 'flex',
        justifyContent: 'space-around', alignItems: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <SaltSpoon />
        <ChipsPacket />
        <KetchupBottle />
      </div>

      {/* NEECHE LEFT - Boy */}
      <div style={{ position: 'absolute', bottom: 0, left: 20, transform: 'scale(1.4)', transformOrigin: 'bottom left' }}>
        <Boy />
      </div>

      {/* NEECHE RIGHT - Speech Bubble */}
      <div style={{
        position: 'absolute', bottom: 120, right: 40,
        backgroundColor: 'white', padding: 30, borderRadius: 30,
        fontSize: 40, fontWeight: 'bold', maxWidth: 550
      }}>
        Chips, ketchup me chhupa namak hi BP badhata hai!
      </div>
    </AbsoluteFill>
  );
};
