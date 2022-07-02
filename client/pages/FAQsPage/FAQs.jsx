import React, { useState } from "react";
import jsonFAQ from './faq.json';
import './FAQs.css'

function FAQsPage(props) {
  const faqItems = [];
  jsonFAQ.forEach(item => {
    faqItems.push(
      <>
      <details>
        <summary className="faqQuestion">{item.question}</summary>
        {item.answer}
      </details>
      </>
    );
  });
  return (
    <div>
      <h1>FAQ</h1>
      {faqItems}
    </div>
  );
}

export default FAQsPage;
