export interface switchImageInterface {
  (type: 'next' | 'prev'): void
}

export interface optionClickInterface {
  (evt: Event): void
}

export interface onImgMousewheelInterface {
  (evt: WheelEvent): void
}

export interface handleCloseInterface {
  (evt: MouseEvent): void
}
