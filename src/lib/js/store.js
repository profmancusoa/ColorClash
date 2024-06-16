import { writable } from 'svelte/store';

// share score between components
export const totalScore = writable(0);
export const currentScore = writable(0);
