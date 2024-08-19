import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep() {
  const time = Math.floor(Math.random() * 1000) + 500;
  return new Promise(resolve => setTimeout(resolve, time));
}
