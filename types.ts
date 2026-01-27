
// Fix: Added React import to provide the React namespace for type definitions
import React from 'react';

export interface TestimonialData {
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

export interface BonusItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}