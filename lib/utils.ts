import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fmtBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " b";
  if (bytes < 1048576) return (bytes / 1024).toFixed(2) + "kb";
  return (bytes / 1048576).toFixed(1) + "mb";
}

export function fmtTime(ms: number): string {
  if (ms < 1000) return ms.toFixed(0) + "ms";
  return (ms / 1000).toFixed(2) + "s";
}
