import React from "react";

export default function TermsAndConditions() {
  const terms = [
    {
      number: "1",
      title: "Data Storage & Transfers",
      points: [
        "Your data may be securely stored and processed using cloud services to ensure reliable platform performance.",
        "By using UniConnect, you agree to the handling of your data in accordance with our privacy standards and applicable regulations.",
      ],
    },
    {
      number: "2",
      title: "Student Eligibility",
      points: [
        "UniConnect is intended for verified university and college students.",
        "Users must register using a valid academic email or approved student verification method.",
        "Accounts found to be fake or unverified may be restricted or removed.",
      ],
    },
    {
      number: "3",
      title: "Community Guidelines",
      intro: "Users must not:",
      points: [
        "Post content that is offensive, harmful, or inappropriate.",
        "Engage in harassment, hate speech, or discrimination.",
        "Share false information or spam content.",
        "Attempt to misuse or disrupt the platform’s features.",
      ],
    },
  ];

  return (
    <section
      id="terms-section"
      className="w-full bg-black py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {terms.map((term) => (
          <div
            key={term.number}
            className="rounded-3xl border border-primary/20 bg-[#0b0b10] p-6 sm:p-8 shadow-lg shadow-primary/5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              <span className="text-primary">{term.number}.</span> {term.title}
            </h2>

            {term.intro && (
              <p className="text-gray-400 mb-4">{term.intro}</p>
            )}

            <ul className="space-y-3 text-gray-400">
              {term.points.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}