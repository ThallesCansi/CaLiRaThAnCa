import { useRef, forwardRef, useImperativeHandle, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import type { AlbumPage as AlbumPageType, Sticker, StickerSlot } from "@/types/album";
import { AlbumPage } from "./AlbumPage";

interface FlipBookProps {
  pages: AlbumPageType[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onDropSticker?: (slot: StickerSlot, sticker: Sticker) => void;
  draggedSticker?: Sticker;
}

export interface FlipBookHandle {
  flipNext: () => void;
  flipPrev: () => void;
  flipToPage: (page: number) => void;
}

export const FlipBook = forwardRef<FlipBookHandle, FlipBookProps>(
  ({ pages, currentPage, onPageChange, onDropSticker, draggedSticker }, ref) => {
    const bookRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // Target single-page base ratio 707x1000 (== designers' 1414x2000)
    const PAGE_AR = 707 / 1000; // width / height
    const [dims, setDims] = useState({ width: 707, height: 1000 });

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const compute = () => {
        const padding = 24; // safety padding for arrows/borders
        const availW = Math.max(320, el.clientWidth - padding);
        const availH = Math.max(360, el.clientHeight - padding);

        // When in landscape (two-page spread), two pages sit side by side.
        // Choose single-page width so that 2*width <= availW and height <= availH.
        const widthByW = availW / 2; // max single-page width permitted by horizontal space
        const widthByH = PAGE_AR * availH; // width derived from height constraint
        let pageW = Math.min(widthByW, widthByH);
        let pageH = pageW / PAGE_AR;

        // Apply a slight scale down to leave space for a tray below the album
        const SCALE = 0.92;
        pageW = Math.floor(pageW * SCALE);
        pageH = Math.floor(pageH * SCALE);

        // Clamp to reasonable bounds
        const clampedW = Math.max(320 * PAGE_AR, Math.min(pageW, 1414));
        const clampedH = Math.max(320, Math.min(pageH, 2000));
        setDims({ width: clampedW, height: clampedH });
      };

      const ro = new ResizeObserver(compute);
      ro.observe(el);
      compute();
      return () => ro.disconnect();
    }, []);

    useImperativeHandle(ref, () => ({
      flipNext: () => bookRef.current?.pageFlip()?.flipNext(),
      flipPrev: () => bookRef.current?.pageFlip()?.flipPrev(),
      flipToPage: (page: number) => bookRef.current?.pageFlip()?.turnToPage(page),
    }));

    return (
      <div ref={containerRef} className="flex items-center justify-center w-full h-full">
        <HTMLFlipBook
          ref={bookRef}
          width={dims.width}
          height={dims.height}
          size="stretch"
          minWidth={280}
          maxWidth={1414}
          minHeight={360}
          maxHeight={2000}
          maxShadowOpacity={0}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={(e) => onPageChange(e.data)}
          className="flip-book"
          style={{}}
          startPage={currentPage}
          drawShadow={false}
          flippingTime={800}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={false}
          disableFlipByClick={false}
        >
          {pages.map((page) => (
            <div key={page.id} className="page">
              <AlbumPage page={page} onDropSticker={onDropSticker} draggedSticker={draggedSticker} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    );
  }
);

FlipBook.displayName = "FlipBook";
