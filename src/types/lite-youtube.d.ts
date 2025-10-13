import * as React from 'react';

declare global {
  namespace JSX {
    interface LiteYouTubeProps extends React.HTMLAttributes<HTMLElement> {
      videoid?: string;
      playlabel?: string;
    }

    interface IntrinsicElements {
      'lite-youtube': LiteYouTubeProps;
    }
  }
}

export {};
