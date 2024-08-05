import { AfterViewInit, Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';
import type { SwiperOptions } from 'swiper/types/swiper-options'
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'swiper-container',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement

  @Input() config?: SwiperOptions

  constructor(
    private el: ElementRef<HTMLElement & { initialize: () => void }>,
    @Inject(PLATFORM_ID) private platformId: object

  ) {
    this.swiperElement = el.nativeElement
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.el.nativeElement, this.config);

      this.el.nativeElement.initialize();
    }
  }
}
