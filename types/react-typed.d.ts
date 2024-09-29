// types/react-typed.d.ts

declare module 'react-typed' {
    import * as React from 'react';
  
    export interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      backDelay?: number;
      fadeOut?: boolean;
      fadeOutClass?: string;
      fadeOutDelay?: number;
      smartBackspace?: boolean;
      shuffle?: boolean;
      showCursor?: boolean;
      cursorChar?: string;
      autoInsertCss?: boolean;
      attr?: string;
      bindInputFocusEvents?: boolean;
      contentType?: 'html' | 'text';
      loopCount?: number;
      startDelay?: number;
      backDelay?: number;
      preStringTyped?: (arrayPos: number, self: object) => void;
      onStringTyped?: (arrayPos: number, self: object) => void;
      onLastStringBackspaced?: (self: object) => void;
      onTypingPaused?: (arrayPos: number, self: object) => void;
      onTypingResumed?: (arrayPos: number, self: object) => void;
      onReset?: (self: object) => void;
      onStop?: (arrayPos: number, self: object) => void;
      onStart?: (arrayPos: number, self: object) => void;
      onDestroy?: (self: object) => void;
    }
  
    const Typed: React.FC<TypedProps>;
  
    export default Typed;
  }
  