export interface InputValue<T = unknown> {
  value: T;
}

export interface InputValueWithImage<T> extends InputValue<T> {
  src: string;
}
