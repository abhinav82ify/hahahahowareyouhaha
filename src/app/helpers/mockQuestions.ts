import { Question } from "@/models/question.model";

let mockQuestions: Question[] = [
  {
    question: "Little interest or pleasure in doing things",
    availableAnswers: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ],
    order: 1,
    choices: [],
    selectedChoice: ""
  },
  {
    question: "Feeling down, depressed, or hopeless",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 2,
    choices: [],
    selectedChoice: ""
  },
  {
    question: "Trouble falling or staying asleep, or sleeping too much",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 3,
    choices: [],
    selectedChoice: ""
  },
  {
    question: "Feeling tired or having little energy",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 4,
    choices: [],
    selectedChoice: ""
  },
  {
    question: "Poor appetite or overeating",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 5,
    choices: [],
    selectedChoice: ""
  },
  {
    question:
      "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 6,
    choices: [],
    selectedChoice: ""
  },
  {
    question:
      "Trouble concentrating on things, such as reading the newspaper or watching television",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 7,
    choices: [],
    selectedChoice: ""
  },
  {
    question:
      "Moving or speaking so slowly that other people could have noticed",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 8,
    choices: [],
    selectedChoice: ""
  },
  {
    question:
      "Thoughts that you would be better off dead, or of hurting yourself",
    availableAnswers: [
      "Nearly every day",
      "More than half of the days",
      "Several days",
      "Not at all"
    ],
    order: 9,
    choices: [],
    selectedChoice: ""
  },
  {
    question:
      "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?",
    availableAnswers: [
      "Extremely difficult",
      "Very difficult",
      "Somewhat difficult",
      "Not difficult at all"
    ],
    order: 10,
    choices: [],
    selectedChoice: ""
  }
];

export default mockQuestions;
