import { useCallback, useEffect, useRef, useState } from "react";
import * as React from "react";

export const Slider = () => {
  const [pos, setPos] = useState<number>(0);
  const [startPos, setStartPos] = useState<number>(0);
  const [fullSwipe, setFullSwipe] = useState<number>(0);
  const [inSwipe, setInSwipe] = useState<boolean>(false);
  const [isCorrecting, setIsCorrecting] = useState<boolean>(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const onMouseDownHandler = (evt: React.MouseEvent) => {
    setStartPos(evt.clientX);
    setPos(evt.clientX);
    setInSwipe(true);
  };

  const onTouchStartHandler = (evt: React.TouchEvent) => {
    setStartPos(evt.touches[0].clientX);
    setPos(evt.touches[0].clientX);
    setInSwipe(true);
  };

  const onMouseMoveHandler = (evt: React.MouseEvent) => {
    if (inSwipe) {
      setPos(evt.clientX);
    }
  };

  const onTouchMoveHandler = (evt: React.TouchEvent) => {
    if (inSwipe) {
      setPos(evt.touches[0].clientX);
    }
  };

  const onMouseUpHandler = useCallback(
    (evt: React.MouseEvent) => {
      setInSwipe(false);
      setStartPos(evt.clientX);
      if (fullSwipe + pos - startPos >= -100) {
        setFullSwipe(fullSwipe + pos - startPos);
      }

      setIsCorrecting(true);
    },
    [fullSwipe, pos, startPos]
  );

  const onTouchEndHandler = useCallback(
    (evt: React.TouchEvent) => {
      setInSwipe(false);
      setStartPos(evt.changedTouches[evt.changedTouches.length - 1].clientX);
      if (fullSwipe + pos - startPos >= -100) {
        setFullSwipe(fullSwipe + pos - startPos);
      }

      setIsCorrecting(true);
    },
    [fullSwipe, pos, startPos]
  );

  useEffect(() => {
    if (blockRef.current && inSwipe) {
      if (fullSwipe + (pos - startPos) >= -100) {
        blockRef.current.style.transform = `translateX(${fullSwipe + (pos - startPos)}px)`;
      }
    }
  }, [fullSwipe, inSwipe, pos, startPos]);

  useEffect(() => {
    if (isCorrecting && blockRef.current) {
      const resultSwipe = Math.round(fullSwipe / 100) * 100;
      setFullSwipe(resultSwipe);

      if (fullSwipe + (pos - startPos) >= -100) {
        blockRef.current.style.transform = `translateX(${resultSwipe}px)`;
      }

      setIsCorrecting(false);
    }
  }, [fullSwipe, inSwipe, isCorrecting, pos, startPos]);

  return (
    <div
      ref={blockRef}
      onMouseLeave={onMouseUpHandler}
      onTouchStart={onTouchStartHandler}
      onTouchMove={onTouchMoveHandler}
      onTouchEnd={onTouchEndHandler}
      onMouseDown={onMouseDownHandler}
      onMouseMove={onMouseMoveHandler}
      onMouseUp={onMouseUpHandler}
      className="h-[100px] w-full bg-green-400 transition-transform duration-100"
    ></div>
  );
};
