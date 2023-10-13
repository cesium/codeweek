import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Faq({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFaq() {
    setIsOpen((latest) => !latest);
  }

  return (
    <div
      onClick={toggleFaq}
      className="cursor-pointer rounded-lg bg-gray1 border border-gray2 shadow-sm hover:border-primary transition duration-200 ease-in-out px-4 py-6"
    >
      <div>
        {isOpen ? (
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-white mr-2 w-[16px]"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCaretRight}
            className="text-white mr-2 w-[16px]"
          />
        )}
        <span className="text-white font-semibold">{faq.question}</span>
      </div>
      {isOpen && <div className="text-white mt-2">{faq.answer}</div>}
    </div>
  );
}
