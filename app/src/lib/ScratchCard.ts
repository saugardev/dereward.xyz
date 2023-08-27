import confetti from 'canvas-confetti';

type Position = {
  x: number;
  y: number;
};

export class ScratchModule {
  private readonly isSafari: boolean = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  private readonly scratchCardCover: HTMLElement;
  private readonly scratchCardCanvasRender: HTMLImageElement;
  private readonly scratchCardCoverContainer: HTMLElement;
  private readonly scratchCardText: HTMLElement;
  private readonly scratchCardImage: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  private isPointerDown: boolean = false;
  private positionX: number = 0;
  private positionY: number = 0;
  private clearDetectionTimeout: ReturnType<typeof setTimeout> | null = null;
  private setImageTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly devicePixelRatio: number = window.devicePixelRatio || 1;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;

  constructor(canvasSelector: string) {
    this.scratchCardCover = document.querySelector('.scratch-card-cover')!;
    this.scratchCardCanvasRender = document.querySelector('.scratch-card-canvas-render')!;
    this.scratchCardCoverContainer = document.querySelector('.scratch-card-cover-container')!;
    this.scratchCardText = document.querySelector('.scratch-card-text')!;
    this.scratchCardImage = document.querySelector('.scratch-card-image')!;
    this.canvas = document.querySelector(canvasSelector)!;
    this.context = this.canvas.getContext('2d')!;
    this.canvasWidth = this.canvas.offsetWidth * this.devicePixelRatio;
    this.canvasHeight = this.canvas.offsetHeight * this.devicePixelRatio;

    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;

    this.context.scale(this.devicePixelRatio, this.devicePixelRatio);

    if (this.isSafari) {
      this.canvas.classList.add('hidden');
    }

    this.canvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
  }

  private handlePointerDown(e: PointerEvent) {
    this.scratchCardCover.classList.remove('shine');
    const { x, y } = this.getPosition(e);
    this.positionX = x;
    this.positionY = y;
    clearTimeout(this.clearDetectionTimeout!);
    this.isPointerDown = true; // Set isPointerDown to true here

    this.canvas.addEventListener('pointermove', this.plot.bind(this));

    window.addEventListener('pointerup', () => {
      this.isPointerDown = false; // Set isPointerDown to false here
      this.canvas.removeEventListener('pointermove', this.plot.bind(this));
      this.clearDetectionTimeout = setTimeout(() => {
        this.checkBlackFillPercentage();
      }, 500);
    }, { once: true });
  }

  private checkBlackFillPercentage(): void {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const pixelData = imageData.data;

    let blackPixelCount = 0;

    for (let i = 0; i < pixelData.length; i += 4) {
      const red = pixelData[i];
      const green = pixelData[i + 1];
      const blue = pixelData[i + 2];
      const alpha = pixelData[i + 3];

      if (red === 0 && green === 0 && blue === 0 && alpha === 255) {
        blackPixelCount++;
      }
    }

    const blackFillPercentage = blackPixelCount * 100 / (this.canvas.width * this.canvas.height);
  
    if (blackFillPercentage >= 45) {
      this.scratchCardCoverContainer.classList.add('clear');
      confetti({
        particleCount: 100,
        spread: 90,
        origin: {
          y: (this.scratchCardText.getBoundingClientRect().bottom + 60) / window.innerHeight,
        },
      });
      this.scratchCardText.textContent = '';
      this.scratchCardImage.classList.add('animate');
      this.scratchCardCoverContainer.addEventListener('transitionend', () => {
        this.scratchCardCoverContainer.classList.add('hidden');
      }, { once: true });
    }
  }

  private getPosition({ clientX, clientY }: { clientX: number, clientY: number }): Position {
    const { left, top } = this.canvas.getBoundingClientRect();
    return {
      x: clientX - left,
      y: clientY - top,
    };
  }

  private plotLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void {
    var diffX = Math.abs(x2 - x1);
    var diffY = Math.abs(y2 - y1);
    var dist = Math.sqrt(diffX * diffX + diffY * diffY);
    var step = dist / 50;
    var i = 0;
    var t;
    var x;
    var y;
  
    while (i < dist) {
      t = Math.min(1, i / dist);
  
      x = x1 + (x2 - x1) * t;
      y = y1 + (y2 - y1) * t;
  
      context.beginPath();
      context.arc(x, y, 16, 0, Math.PI * 2);
      context.fill();
  
      i += step;
    }
  }

  private setImageFromCanvas(): void {
    let previousUrl: string | undefined;
    this.canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      previousUrl = this.scratchCardCanvasRender.src;
      this.scratchCardCanvasRender.src = url;
      if (!previousUrl) {
        this.scratchCardCanvasRender.classList.remove('hidden');
      } else {
        URL.revokeObjectURL(previousUrl);
      }
      previousUrl = url;
    });
  }

  private plot(e: PointerEvent): void {
    if (!this.isPointerDown) return;

    const { x, y } = this.getPosition(e);
    this.plotLine(this.context, this.positionX, this.positionY, x, y);
    this.positionX = x;
    this.positionY = y;
    if (this.isSafari) {
      clearTimeout(this.setImageTimeout!);

      this.setImageTimeout = setTimeout(() => {
        this.setImageFromCanvas();
      }, 5);
    }
  }
}
