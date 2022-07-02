import React, { useState } from "react";
import jsonFAQ from './faq.json';
import './FAQs.css'

function FAQsPage(props) {
  const [openQuestion, setOpenQuestion] = useState(-1);

  const faqItems = [];
  jsonFAQ.forEach((item, i) => {
    faqItems.push(
      <>
      <details
        className="faq-details"
        onClick={(e) => {
          e.preventDefault();
          setOpenQuestion(i);
        }}
        open={openQuestion === i}
      >
        <summary className={`faq-question${openQuestion === i ? ' open-question' : ''}`}>{item.question}</summary>
        {item.answer}
      </details>
      </>
    );
  });
  return (
    <div className="faq-div">
      <div className="page-title">
        <h1>FAQ</h1>
        <p className="faqs-summary">
          Frequently Asked Questions:
        </p>
      </div>
      <div className="faq-questions">
        {faqItems}
      </div>
    </div>
  );
}

export default FAQsPage;
