import React from "react";

export default function PrivacyPolicy() {
  return (
    <section id="privacy-section" className="bg-black text-white min-h-screen px-6 py-25">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-primary rounded-full text-white text-4xl mb-6">
          🔒 PRIVACY POLICY
        </div>

        {/* Title */}
        

        {/* Subtitle */}
        <p className="text-gray-400 mb-7">
          UniConnect Platform
        </p>

        {/* Info */}
        <div className="space-y-2 text-gray-300 mb-10">
          <p><span className="font-semibold text-primary">Version:</span> 1.0</p>
          <p><span className="font-semibold text-primary">Last Updated:</span> March 2026</p>
          <p><span className="font-semibold text-primary">Platform:</span> UniConnect</p>
          <p><span className="font-semibold text-primary">Operated By:</span> Agile Team</p>
          <p>
            <span className="font-semibold text-primary">Purpose:</span> Connecting students globally through a secure digital platform
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-zinc-900 border border-primary/30 rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/10">
          
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-primary">
            PLEASE READ THIS POLICY CAREFULLY
          </h2>

          <p className="text-gray-400 leading-relaxed">
            By accessing or using UniConnect, you confirm that you have read and understood this Privacy Policy. 
            You agree to the collection and use of your information in accordance with this policy. 
            If you do not agree, please discontinue use of the platform immediately.
          </p>

        </div>

      </div>
    </section>
  );
}
