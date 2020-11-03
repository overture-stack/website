import { useEffect, useState } from 'react';

// as of nov 2 2020 gatsby doesn't have full SSR.
// it is a high priority issue: https://github.com/gatsbyjs/gatsby/issues/25729
// in the meantime this is the suggested workaround:
// https://blog.logrocket.com/fixing-gatsbys-rehydration-issue/

export default function useIsClient() {
  const [isClient, setClient] = useState(false);
  const key = isClient ? 'client' : 'server';

  useEffect(() => {
    setClient(true);
  }, []);

  return { isClient, key };
}
