import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
  return `Hi — I'm Muhammad Akhyar Fahrurrozi.

I'm currently looking for internship positions in the following areas:
- AI / Machine Learning (modeling, inference, applied ML)
- Backend Development (Node.js/TypeScript, APIs, scalable services)
- Systems / Robotics / Autonomous Systems (applying research to products)

Preferences:
- Type: full-time internship or part-time with practical learning opportunities
- Location: flexible (Depok / remote / hybrid)
- Duration: 2–6 months (negotiable)

Quick skills summary:
- Languages: TypeScript, JavaScript, Python
- Tools: Next.js, Node.js, Docker, basic ML stack
- Other: competitive programming, strong problem-solving, fast learner

How to reach me:
- Email: muhammadakfz@gmail.com (subject: Internship Opportunity)
- LinkedIn: https://www.linkedin.com/in/muhammadakfz/
- GitHub: https://github.com/muhammadakfz

If you have a relevant opening, please send the role details and timeline — I will reply as soon as possible. Let's build something useful together! ✌️`;
  },
});
