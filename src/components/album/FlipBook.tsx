import { useRef, forwardRef, useImperativeHandle } from "react";
import HTMLFlipBook from "react-pageflip";
import type { AlbumPage as AlbumPageType } from "@/types/album";
import { AlbumPage } from "./AlbumPage";

interface FlipBookProps {
  pages: AlbumPageType[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface FlipBookHandle {
  flipNext: () => void;
  flipPrev: () => void;
  flipToPage: (page: number) => void;
}

export const FlipBook = forwardRef<FlipBookHandle, FlipBookProps>(
  ({ pages, currentPage, onPageChange }, ref) => {
    const bookRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      flipNext: () => bookRef.current?.pageFlip()?.flipNext(),
      flipPrev: () => bookRef.current?.pageFlip()?.flipPrev(),
      flipToPage: (page: number) => bookRef.current?.pageFlip()?.turnToPage(page),
    }));

    return (
      <div className="flex items-center justify-center w-full h-full">
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          onFlip={(e) => onPageChange(e.data)}
          className="flip-book"
          style={{}}
          startPage={currentPage}
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pages.map((page) => (
            <div key={page.id} className="page">
              <AlbumPage page={page} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    );
  }
);

FlipBook.displayName = "FlipBook";
