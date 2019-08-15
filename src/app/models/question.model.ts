export interface Question {
  question: string;
  availableAnswers: string[];
  choices: string[];
  order: number;
  selectedChoice: string;
}
