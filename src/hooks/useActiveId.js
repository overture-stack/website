import { useEffect, useState } from 'react';

// gets the current active element by ID
// i.e. for the documentation table of contents sidebar

// ref: https://nickymeuleman.netlify.app/blog/table-of-contents#get-the-active-headings-id

export default function useActiveId(itemIds = []) {
  const [activeId, setActiveId] = useState('');
  useEffect(() => {
    // A page whose table of contents has no entries observes nothing, but the
    // hooks above still have to run: their order cannot depend on the argument.
    if (!itemIds.length) {
      return;
    }
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
      observer.observe(el);
    });
    return () => {
      itemIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        observer.unobserve(el);
      });
    };
  }, [itemIds]);
  return activeId;
}
