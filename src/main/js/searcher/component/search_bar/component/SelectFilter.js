import { useEffect, useState } from 'react';

const SelectFilter = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [availables, setAvailables] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    getAvailables();
  }, props.dependencies);

  const getAvailables = () => {
    const request = new Request(props.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setIsLoading(true);
    fetch(request)
      .then(response => {
        response.json().then(data => {
          setAvailables(data);
          if (!!selected && !data.includes(selected)) {
            setSelected('');
            props.setFilter({ [props.name]: null });
          } else if (data.length === 1) {
            setSelected(data[0]);
            props.setFilter({ [props.name]: data[0] });
          }
        });
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const onAvailablesChange = e => {
    if (e !== undefined) {
      setSelected(!!e.target.value ? e.target.value : '');
      props.setFilter({ [props.name]: !!e.target.value ? e.target.value : null });
    } else {
      setSelected('');
      props.setFilter({ [props.name]: null });
    }
  };

  return (
    <ul className={isLoading ? 'search-param-con-disabled' : 'search-param-con'}>
      <li>
        <label className={!!selected ? 'search-param-label-active' : 'search-param-label'}>
          {props.label}
        </label>
      </li>
      <li>
        <select className="single-select-filter" value={selected} onChange={onAvailablesChange}>
          {availables.map(available => (
            <option key={available} value={available}>
              {available}
            </option>
          ))}
        </select>
      </li>
    </ul>
  );
};

export default SelectFilter;
