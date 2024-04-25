import { isPlatformServer } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { defaultImageLocation } from './image-locations.model';

type ImageSrc = string | null | undefined;

@Directive({
  selector: '[appDefaultImg]',
  standalone: true,
})
export class DefaultImgDirective implements OnChanges {
  @Input({ required: true }) alt: string = '';
  @Input({ required: true }) src: ImageSrc = null;

  private defaultLocalImage = defaultImageLocation;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private imageRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    this.initImage();
  }

  private initImage() {
    // do not evaluate on SSR
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.renderer.addClass(this.imageRef.nativeElement, 'g-skeleton');

    const img = new Image();

    if (!this.src) {
      return;
    }

    img.onload = () => {
      this.setImage(this.resolveImage(this.src));
      this.imageRef.nativeElement.setAttribute('alt', this.alt);
      this.renderer.removeClass(this.imageRef.nativeElement, 'g-skeleton');
    };

    img.onerror = () => {
      this.setImage(this.defaultLocalImage);
      this.renderer.removeClass(this.imageRef.nativeElement, 'g-skeleton');
    };

    img.alt = '';
    img.src = this.resolveImage(this.src);
  }

  private setImage(src: ImageSrc) {
    this.imageRef.nativeElement.setAttribute('src', src);
  }

  private resolveImage(src: ImageSrc): string {
    if (!src) {
      return this.defaultLocalImage;
    }

    return src;
  }
}
