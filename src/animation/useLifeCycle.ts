import { signal } from '@preact/signals-core';

export const pageEnterState = signal<boolean>(false);

export const pageEnter = (): void => {
  pageEnterState.value = true;
};
