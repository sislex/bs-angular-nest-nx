import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core'
import { SwiperDirective } from '../../../../components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
// import function to register Swiper custom elements
import { SwiperContainer, register } from 'swiper/element/bundle'
import { heroSwiper, HeroType } from '../../data'
import { EffectCreative, Pagination, Thumbs } from 'swiper/modules'
import { CommonModule } from '@angular/common'

register()
@Component({
  selector: 'about',
  standalone: true,
  imports: [SwiperDirective, CommonModule],
  templateUrl: './about.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  heroSwiper: HeroType[] = heroSwiper
  constructor(
    private elementRef: ElementRef,
  ) {}
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>

  index = 0

  swiperConfig: SwiperOptions = {
    modules: [EffectCreative],
    effect: 'creative',
    loop: true,
    allowTouchMove: false,
    speed: 450,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        translate: ['-102%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    thumbs: {
      swiper: '#thumbnails',
    },
  }

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    autoplay: true,
  }

  ngAfterViewInit(): void {
    if (this.swiper && this.swiper.nativeElement) {
      this.swiper.nativeElement.swiper.activeIndex = this.index
    }
  }
}
