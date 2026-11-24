import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import type { ReactNode } from 'react';
import { BpVideo } from './BpVideo';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import { CTA } from './CTA';

type SceneTransitionProps = {
  children: ReactNode;
  hasNext?: boolean;
  isFirst?: boolean;
};

const SceneTransition = ({
  children,
  hasNext = true,
  isFirst = false,
}: SceneTransitionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = isFirst
    ? 1
    : interpolate(frame, [0, 10], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });
  const fadeOut = hasNext
    ? interpolate(frame, [270, 280], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;
  const popProgress = isFirst
    ? 1
    : spring({ frame: Math.min(frame, 10), fps });

  return (
    <AbsoluteFill
      style={{
        opacity: Math.min(fadeIn, fadeOut),
        transform: `scale(${isFirst ? 1 : 0.88 + popProgress * 0.12})`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export const FinalVideo = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F0F7FF',
        backgroundImage: 'radial-gradient(#C9DDF5 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    >
      <Sequence from={0} durationInFrames={280}>
        <SceneTransition isFirst>
          <BpVideo />
        </SceneTransition>
      </Sequence>
      <Sequence from={270} durationInFrames={280}>
        <SceneTransition>
          <Step2 />
        </SceneTransition>
      </Sequence>
      <Sequence from={540} durationInFrames={280}>
        <SceneTransition>
          <Step3 />
        </SceneTransition>
      </Sequence>
      <Sequence from={810} durationInFrames={280}>
        <SceneTransition>
          <Step4 />
        </SceneTransition>
      </Sequence>
      <Sequence from={1080} durationInFrames={280}>
        <SceneTransition>
          <Step5 />
        </SceneTransition>
      </Sequence>
      <Sequence from={1350} durationInFrames={450}>
        <SceneTransition hasNext={false}>
          <CTA />
        </SceneTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
