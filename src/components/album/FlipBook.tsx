import { useRef, forwardRef, useImperativeHandle, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import HTMLFlipBook from "react-pageflip";
import type { AlbumPage as AlbumPageType, Sticker, StickerSlot } from "@/types/album";
import { AlbumPage } from "./AlbumPage";

interface FlipBookProps {
  pages: AlbumPageType[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onDropSticker?: (slot: StickerSlot, sticker: Sticker) => void;
  draggedSticker?: Sticker;
  disableFlipByClick?: boolean;
  onPlayGame?: (gameId: string) => void;
}

export interface FlipBookHandle {
  flipNext: () => void;
  flipPrev: () => void;
  flipToPage: (page: number) => void;
}

export const FlipBook = forwardRef<FlipBookHandle, FlipBookProps>(
  ({ pages, currentPage, onPageChange, onDropSticker, draggedSticker, disableFlipByClick = false, onPlayGame }, ref) => {
    const bookRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // Designer's exact dimensions: 1414x2000
    const PAGE_WIDTH = 1414;
    const PAGE_HEIGHT = 2000;
    const PAGE_AR = PAGE_WIDTH / PAGE_HEIGHT; // 0.707
    const [dims, setDims] = useState({ width: PAGE_WIDTH, height: PAGE_HEIGHT });

    const isMobile = useIsMobile();

    // Verificar se a página atual tem slots com figurinhas
    const currentPageHasStickers = pages[currentPage]?.slots.some(slot => slot.sticker !== null) || false;

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const compute = () => {
        const padding = 40; // padding para evitar cortes
        const availW = Math.max(320, el.clientWidth - padding);
        const availH = Math.max(360, el.clientHeight - padding);

        // Calcula o fator de escala mantendo a proporção exata 1414x2000
        const pagesWide = isMobile ? 1 : 2;
        const scaleByWidth = availW / (PAGE_WIDTH * pagesWide);
        const scaleByHeight = availH / PAGE_HEIGHT;

        // Usa sempre a menor escala para garantir que cabe completamente
        const scale = Math.min(scaleByWidth, scaleByHeight);
        
        const finalW = Math.floor(PAGE_WIDTH * scale);
        const finalH = Math.floor(PAGE_HEIGHT * scale);
        
        setDims({ width: finalW, height: finalH });
      };

      const ro = new ResizeObserver(compute);
      ro.observe(el);
      compute();
      return () => ro.disconnect();
    }, [isMobile]);

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
          minWidth={320}
          maxWidth={2400}
          minHeight={360}
          maxHeight={3200}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={(e) => onPageChange(e.data)}
          className="flip-book"
          style={{}}
          startPage={currentPage}
          drawShadow={true}
          flippingTime={800}
          usePortrait={isMobile}
          startZIndex={0}
          autoSize={true}
          disableFlipByClick={currentPageHasStickers} // ← Desabilitar sempre quando há figurinhas
          clickEventForward={true} // ← Sempre permitir eventos passarem
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
        >
          {pages.map((page) => (
            <div key={page.id} className="page">
              <AlbumPage 
                page={page} 
                onDropSticker={onDropSticker} 
                draggedSticker={draggedSticker}
                onPlayGame={onPlayGame}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    );
  }
);

FlipBook.displayName = "FlipBook";
