import { useEffect, useState } from 'react';

// gets the current active element by ID
// i.e. for the documentation table of contents sidebar

export default function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(``);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
}
