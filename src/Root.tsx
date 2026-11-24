import { Composition } from 'remotion';
import { BpVideo } from './BpVideo';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import { CTA } from './CTA';
import { FinalVideo } from './FinalVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="BpVideo"
        component={BpVideo}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Step2"
        component={Step2}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Step3"
        component={Step3}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Step4"
        component={Step4}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Step5"
        component={Step5}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CTA"
        component={CTA}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="FinalVideo"
        component={FinalVideo}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
