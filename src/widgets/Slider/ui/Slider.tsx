import { useCallback, useEffect, useRef, useState } from "react";
import * as React from "react";

export const Slider = () => {
  const [pos, setPos] = useState<number>(0);
  const [startPos, setStartPos] = useState<number>(0);
  const [fullSwipe, setFullSwipe] = useState<number>(0);
  const [inSwipe, setInSwipe] = useState<boolean>(false);
  const [isCorrecting, setIsCorrecting] = useState<boolean>(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const spaceBetweenSlides = 80;
  const slideWidth = 320;
  const [slidesCount, setSlidesCount] = useState(0);
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
      if (
        fullSwipe + pos - startPos >= ((slidesCount - 1) * slideWidth + (slidesCount - 1) * spaceBetweenSlides) * -1 &&
        fullSwipe + pos - startPos <= slideWidth
      ) {
        setFullSwipe(fullSwipe + pos - startPos);
      }

      setIsCorrecting(true);
    },
    [fullSwipe, pos, slidesCount, startPos]
  );

  const onTouchEndHandler = useCallback(
    (evt: React.TouchEvent) => {
      setInSwipe(false);
      setStartPos(evt.changedTouches[evt.changedTouches.length - 1].clientX);
      if (
        fullSwipe + pos - startPos >= ((slidesCount - 1) * slideWidth + (slidesCount - 1) * spaceBetweenSlides) * -1 &&
        fullSwipe + pos - startPos <= slideWidth
      ) {
        setFullSwipe(fullSwipe + pos - startPos);
      }

      setIsCorrecting(true);
    },
    [fullSwipe, pos, slidesCount, startPos]
  );

  useEffect(() => {
    if (blockRef.current && inSwipe) {
      if (
        fullSwipe + (pos - startPos) >=
          ((slidesCount - 1) * slideWidth + (slidesCount - 1) * spaceBetweenSlides) * -1 &&
        fullSwipe + pos - startPos <= slideWidth
      ) {
        blockRef.current.style.transform = `translateX(${fullSwipe + (pos - startPos)}px)`;
      }
    }
  }, [fullSwipe, inSwipe, pos, slidesCount, startPos]);

  useEffect(() => {
    if (isCorrecting && blockRef.current) {
      const resultSwipe = Math.round(fullSwipe / 100) * 100;
      setFullSwipe(resultSwipe);

      if (
        fullSwipe + (pos - startPos) >=
          ((slidesCount - 1) * slideWidth + (slidesCount - 1) * spaceBetweenSlides) * -1 &&
        fullSwipe + pos - startPos <= slideWidth
      ) {
        blockRef.current.style.transform = `translateX(${resultSwipe}px)`;
      }
      console.log(
        `translateX(${resultSwipe}px)`,
        slidesCount * slideWidth + (slidesCount - 1) * spaceBetweenSlides + 100
      );

      setIsCorrecting(false);
    }
  }, [fullSwipe, inSwipe, isCorrecting, pos, slidesCount, startPos]);

  useEffect(() => {
    if (slidesRef.current) {
      setSlidesCount(slidesRef.current.children.length);
    }
  }, []);

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
      className="w-full transition-transform duration-50"
    >
      <div ref={slidesRef} className="flex" style={{ gap: `${spaceBetweenSlides}px` }}>
        <div
          className="hover:cursor-grab shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] active:cursor-grabbing select-none shrink-0 rounded-2xl p-4 border border-[#BBBBBB33] bg-white"
          style={{
            width: `${slideWidth}px`,
          }}
        >
          <img src="https://i.imgur.com/mp3rUty.jpeg" className="w-full pointer-events-none" alt="product-img" />
          <h3 className="font-rubik text-lg text-center font-medium line-clamp-2 min-h-[42px] pointer-events-none">
            Classic Comfort Drawstring Joggers
          </h3>
          <p className="font-rubik text-lg text-center line-clamp-4 min-h-[68px] pointer-events-none">
            Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for
            a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable
            drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will
            quickly become your go-to for effortless, casual wear.
          </p>
        </div>
        <div
          className="hover:cursor-grab shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] active:cursor-grabbing select-none shrink-0 rounded-2xl p-4 border border-[#BBBBBB33] bg-white"
          style={{
            width: `${slideWidth}px`,
          }}
        >
          <img src="https://i.imgur.com/mp3rUty.jpeg" className="w-full pointer-events-none" alt="product-img" />
          <h3 className="font-rubik text-lg text-center font-medium line-clamp-2 min-h-[42px] pointer-events-none">
            Classic Comfort Drawstring Joggers
          </h3>
          <p className="font-rubik text-lg text-center line-clamp-4 min-h-[68px] pointer-events-none">
            Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for
            a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable
            drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will
            quickly become your go-to for effortless, casual wear.
          </p>
        </div>
        <div
          className="hover:cursor-grab shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] active:cursor-grabbing select-none shrink-0 rounded-2xl p-4 border border-[#BBBBBB33] bg-white"
          style={{
            width: `${slideWidth}px`,
          }}
        >
          <img src="https://i.imgur.com/mp3rUty.jpeg" className="w-full pointer-events-none" alt="product-img" />
          <h3 className="font-rubik text-lg text-center font-medium line-clamp-2 min-h-[42px] pointer-events-none">
            Classic Comfort Drawstring Joggers
          </h3>
          <p className="font-rubik text-lg text-center line-clamp-4 min-h-[68px] pointer-events-none">
            Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for
            a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable
            drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will
            quickly become your go-to for effortless, casual wear.
          </p>
        </div>
        <div
          className="hover:cursor-grab shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] active:cursor-grabbing select-none shrink-0 rounded-2xl p-4 border border-[#BBBBBB33] bg-white"
          style={{
            width: `${slideWidth}px`,
          }}
        >
          <img src="https://i.imgur.com/mp3rUty.jpeg" className="w-full pointer-events-none" alt="product-img" />
          <h3 className="font-rubik text-lg text-center font-medium line-clamp-2 min-h-[42px] pointer-events-none">
            Classic Comfort Drawstring Joggers
          </h3>
          <p className="font-rubik text-lg text-center line-clamp-4 min-h-[68px] pointer-events-none">
            Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for
            a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable
            drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will
            quickly become your go-to for effortless, casual wear.
          </p>
        </div>
      </div>
    </div>
  );
};
