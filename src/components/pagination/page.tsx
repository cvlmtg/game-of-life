import { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  page: number;
  active: number;
  onChange: (page: number) => void;
}

// --------------------------------------------------------------------

const Page: FunctionComponent<Props> = ({ page, active, onChange }) => {
  const className = page === active ? 'page-item active' : 'page-item';
  const onClick   = () => {
    onChange(page);
  };

  return (
    <li className={className}>
      <button type="button" className="page-link" data-page={page}
        onClick={onClick}>
        {page + 1}
      </button>
    </li>
  );
};

export default Page;
