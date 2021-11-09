import { useMemo } from 'react';

// --------------------------------------------------------------------

export function useRandomId(): string {
  return useMemo(() => Math.random().toString(36).substring(2, 6) || '-', []);
}
