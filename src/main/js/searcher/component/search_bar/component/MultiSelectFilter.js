import { useState, useEffect } from 'react';

const MultiSelectFilter = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [availables, setAvailables] = useState([]);
  const [selecteds, setSelecteds] = useState([]);

  useEffect(() => {
    getAvailables();
  }, props.dependencies);

  const getAvailables = () => {
    const request = new Request(props.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.requestParameters),
    });

    setIsLoading(true);
    fetch(request)
      .then(response => {
        response.json().then(data => {
          setAvailables(data);

          if (selecteds.length > 0) {
            const filteredSelections = selecteds.filter(e => data.includes(e));
            setSelecteds(filteredSelections);
            props.setFilter({
              [props.name]: filteredSelections.length === 0 ? null : filteredSelections,
            });
          }
        });
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const onSelectionsChange = e => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    setSelecteds(selectedOptions.map(option => option.value));

    let selectedArr = selectedOptions.map(option =>
      option.value === '' || option.value === 'NULL' ? null : option.value
    );

    props.setFilter({
      [props.name]: selectedArr.length === 0 ? null : selectedArr,
    });
  };

  return (
    <ul className={isLoading ? 'search-param-con-disabled' : 'search-param-con'}>
      <li>
        <label
          className={
            !!selecteds && selecteds.length > 0 ? 'search-param-label-active' : 'search-param-label'
          }
        >
          {props.label}
        </label>
      </li>
      <li>
        <select
          value={selecteds}
          onChange={onSelectionsChange}
          multiple
          className={
            props.isSmall === true
              ? 'small-multi-select-filter'
              : props.isSmall === false
              ? 'large-multi-select-filter'
              : 'multi-select-filter'
          }
        >
          {availables.length > 0 &&
            availables.map(available => (
              <option key={available} value={available}>
                {!!available ? available : 'NULL'}
              </option>
            ))}
        </select>
      </li>
    </ul>
  );
};

export default MultiSelectFilter;
