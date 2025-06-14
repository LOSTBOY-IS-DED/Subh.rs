import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "What kind of projects do you specialize in?",
    answer:
      "I build full-stack Web2 and Web3 applications — from modern SaaS tools and landing pages to dApps on Solana and Ethereum. Whether it's a sleek frontend or secure smart contracts, I deliver end-to-end solutions.",
  },
  {
    question: "Which technologies do you use in your stack?",
    answer:
      "For Web2, I primarily use Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and NextAuth. In the Web3 space, I work with Solana and Ethereum, smart contracts, wallet integrations, and decentralized protocols.",
  },
  {
    question:
      "Can you build apps with both user authentication and wallet login?",
    answer:
      "Yes — I can integrate secure login systems with NextAuth for traditional apps, or Web3 wallet authentication like MetaMask or Phantom for decentralized applications.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by deeply understanding your product goals, then I move to wireframing, building the core architecture, and shipping fast — with regular check-ins and full transparency throughout.",
  },
  {
    question: "Do you work with international clients or startups?",
    answer:
      "Absolutely. I've worked with founders, teams, and startups across different time zones. I'm comfortable collaborating async or through scheduled calls, whatever works best for you.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A landing page might take 3 to 5 days. A full-stack or Web3 product with auth and dashboards may take a few weeks. I prioritize clean code and timely delivery.",
  },
];

const FAQs: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b">
              <div className="flex justify-between items-center gap-4">
                <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
                <div className="border border-stone-400 rounded-full inline-flex justify-center items-center size-11 shrink-0">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
