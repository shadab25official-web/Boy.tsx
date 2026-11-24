import { Composition } from 'remotion';
import { BpVideo } from './BpVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="BpVideo"
        component={BpVideo}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
