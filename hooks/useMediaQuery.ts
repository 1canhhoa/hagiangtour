import { useMediaQuery } from 'react-responsive';

export const useResponsiveQueries = () => {
  const isXl = useMediaQuery({ query: '(min-width: 2000px)' });
  const isLg = useMediaQuery({ query: '(min-width: 1280px)' });
  const isMd = useMediaQuery({ query: '(max-width: 1024px)' });
  const isSm = useMediaQuery({ query: '(max-width: 768px)' });
  const isXs = useMediaQuery({ query: '(max-width: 640px)' });

  return {
    isXl,
    isLg,
    isMd,
    isSm,
    isXs,
  };
};