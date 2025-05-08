import { CreateOptionsType, EmblaCarouselType } from 'embla-carousel'

export type DelayOptionType =
  | number
  | ((scrollSnaps: number[], emblaApi: EmblaCarouselType) => number[])

export type RootNodeType =
  | null
  | ((emblaRoot: HTMLElement) => HTMLElement | null)

export type OptionsType = CreateOptionsType<{
  delay: DelayOptionType
  jump: boolean
  playOnInit: boolean
  stopOnFocusIn: boolean
  stopOnInteraction: boolean
  stopOnMouseEnter: boolean
  stopOnLastSnap: boolean
  rootNode: RootNodeType
}>

export const defaultOptions: OptionsType = {
  active: true,
  breakpoints: {},
  delay: 4000,
  jump: false,
  playOnInit: true,
  stopOnFocusIn: true,
  stopOnInteraction: true,
  stopOnMouseEnter: false,
  stopOnLastSnap: false,
  rootNode: null
}
