import { Audio, Img, Video, makeScene2D } from '@revideo/2d';
import { all, chain, createRef, waitFor } from '@revideo/core';

export default makeScene2D(function* (view) {
  const logoRef = createRef<Img>();

  yield view.add(
    <>
      <Video
        src={'/videoplayback.mp4'}
        size={['100%', '100%']}
        play={true}
      />
      <Audio
        src={'/pianoSound.mp3'}
        play={true}
        time={17.0}
      />
    </>,
  );

  yield* waitFor(1);

  view.add(
    <Img
      width={'1%'}
      ref={logoRef}
      src={
        '/introImg.png'
      }
    />,
  );

  yield* chain(
    all(logoRef().scale(40, 2), logoRef().rotation(360, 2)),
    logoRef().scale(60, 1),
  );
});

