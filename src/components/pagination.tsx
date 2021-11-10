import { FunctionComponent, useMemo } from 'react';
import Page from './pagination/page';

// --------------------------------------------------------------------

interface Props {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

// --------------------------------------------------------------------

const Pagination: FunctionComponent<Props> = ({ page, total, onChange }) => {
  const pages = useMemo(() => {
    return new Array(total).fill(0).map((_, index) => index);
  }, [ total ]);

  return (
    <nav className="text-center mt-3">
      <ul className="pagination justify-content-center mb-0">
        {pages.map((num) => (
          <Page key={num} page={num} active={page} onChange={onChange} />
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
