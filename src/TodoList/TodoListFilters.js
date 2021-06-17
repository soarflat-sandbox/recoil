import { useRecoilState } from 'recoil';

import { todoListFilterState } from './state';
import { FILTERS } from './constants';

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={FILTERS.ALL}>All</option>
        <option value={FILTERS.COMPLETED}>Completed</option>
        <option value={FILTERS.UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
}
