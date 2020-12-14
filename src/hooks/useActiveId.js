import { useEffect, useState } from 'react';

// gets the current active element by ID
// i.e. for the documentation table of contents sidebar

// ref: https://nickymeuleman.netlify.app/blog/table-of-contents#get-the-active-headings-id

export default function useActiveId(itemIds = []) {
  if (!itemIds.length) return;
  const [activeId, setActiveId] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -90% 0%` }
    );
    itemIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
}
