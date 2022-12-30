/// <reference types="svelte" />
import type { ComponentType } from "svelte";

export type Row<T> = T & {
  componentData?: unknown;
  component?: ComponentType;
};
