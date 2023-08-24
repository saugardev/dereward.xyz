import AnimatedFAQ from "./motion/AnimatedFAQ";

const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "How many planets are in our solar system?", answer: "8" },
  { question: "Which element has the atomic number 1?", answer: "Hydrogen" },
  { question: "What is the largest mammal?", answer: "Blue whale" },
  { question: "Which fruit is known as the king of fruits?", answer: "Mango" }
]

export default function FAQ() {
  return (
    <div className="mx-auto items-center max-w-7xl pb-24 sm:pb-32">
      <h2 className="mt-4 text-4xl text-stone-700 sm:text-5xl opacity-80">Frequently asked questions</h2>
      <div>
        {questions.map((q, index) => (
          <div key={index} className="py-8 border-b-2 ">
            <AnimatedFAQ  question={q.question} answer={q.answer} />
          </div>
        ))}
      </div>
    </div>
  )
}
