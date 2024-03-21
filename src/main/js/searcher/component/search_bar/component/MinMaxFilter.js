import { useState } from 'react';

const MinMaxFilter = props => {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  const onMinValueChange = e => {
    setMinValue(e.target.value);
    props.setFilter({
      [props.minName]: !!e.target.value
        ? props.type === 'number'
          ? Number(e.target.value)
          : e.target.value
        : null,
    });
  };

  const onMaxValueChange = e => {
    setMaxValue(e.target.value);
    props.setFilter({
      [props.maxName]: !!e.target.value
        ? props.type === 'number'
          ? Number(e.target.value)
          : e.target.value
        : null,
    });
  };

  return (
    <ul className="search-param-con">
      <li>
        <label
          className={!!minValue || !!maxValue ? 'search-param-label-active' : 'search-param-label'}
        >
          {props.label}
        </label>
      </li>
      <li>
        <div>
          <input
            className="min-max-filter"
            id={props.minName}
            type={props.type}
            value={minValue === 0 ? '' : minValue}
            onBlur={onMinValueChange}
          />
          <input
            className="min-max-filter"
            id={props.maxName}
            type={props.type}
            value={maxValue === 0 ? '' : maxValue}
            onBlur={onMaxValueChange}
          />
        </div>
      </li>
    </ul>
  );
};

export default MinMaxFilter;
