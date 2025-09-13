'use client';

import * as htmlToImage from 'html-to-image';
import { useCallback, useRef } from 'react';

interface CaptureProps {
  children: React.ReactNode;
}

export default function Capture({ children }: CaptureProps) {
  const targetRef = useRef(null);

  const handleCapture = useCallback(async () => {
    if (!targetRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(targetRef.current, {
        quality: 1,
        cacheBust: true,
        backgroundColor: '#000',
        canvasHeight: 1350,
        canvasWidth: 1080,
        height: 1350,
        width: 1080,
        pixelRatio: 1,
      });

      const link = document.createElement('a');
      link.download = 'captura.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Erro ao capturar:', err);
    }
  }, []);

  return (
    <div>
      <button onClick={handleCapture}>Capturar</button>
      <div ref={targetRef}>{children}</div>
    </div>
  );
}
