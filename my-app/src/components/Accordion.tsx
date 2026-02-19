import { useState } from 'react';
import './Accordion.css';

interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedIds);
    
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      if (!allowMultiple) {
        newExpanded.clear();
      }
      newExpanded.add(id);
    }
    
    setExpandedIds(newExpanded);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <button
            className={`accordion-button ${expandedIds.has(item.id) ? 'active' : ''}`}
            onClick={() => toggleItem(item.id)}
            aria-expanded={expandedIds.has(item.id)}
          >
            <span className="accordion-title">{item.title}</span>
            <span className="accordion-icon">+</span>
          </button>
          {expandedIds.has(item.id) && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
