'use client';
import React, { useState } from 'react';

type FilterDataType = {
  id: number;
  title: string;
  values: string[];
};

type SelectedFilter = {
  id: number;
  value: string;
};

const filterData: FilterDataType[] = [
  {
    id: 1,
    title: 'Type',
    values: ['Plots', 'Vila', 'Flat'],
  },
  {
    id: 2,
    title: 'Price',
    values: ['min', 'max'],
  },
  {
    id: 3,
    title: 'Area',
    values: ['min', 'max'],
  },
  {
    id: 4,
    title: 'Location',
    values: ['min', 'max'],
  },
];

const FilterComponent: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);

  const toggleFilter = (filterId: number, value: string) => {
    const alreadySelected = selectedFilters.some(
      (filter) => filter.id === filterId && filter.value === value
    );

    if (alreadySelected) {
      setSelectedFilters((filters) =>
        filters.filter(
          (filter) => filter.id !== filterId || filter.value !== value
        )
      );
    } else {
      setSelectedFilters((filters) => [...filters, { id: filterId, value }]);
    }
  };

  const clearAll = () => {
    setSelectedFilters([]);
  };

  return (
    <div>
      <h3 className='border-b mb-4 text-lg'>Filters</h3>
      {filterData.map((filter) => (
        <div key={filter.id} className='h-[3rem]'>
          <h4>{filter.title}</h4>
          {filter.values.map((value) => (
            <label
              key={value}
              className='py-1 px-2 m-1 border border-gray-500 checked:border-green-500'
            >
              <input
                type='checkbox'
                checked={selectedFilters.some(
                  (sf) => sf.id === filter.id && sf.value === value
                )}
                onChange={() => toggleFilter(filter.id, value)}
                className='appearance-none checked:bg-green-500'
              />
              {value}
            </label>
          ))}
        </div>
      ))}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default FilterComponent;
