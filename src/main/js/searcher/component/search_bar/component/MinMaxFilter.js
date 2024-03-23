import { useState } from 'react';

const MinMaxFilter = props => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const onMinBlur = e => {
    props.setFilter({
      [props.minName]: getFilterValue(minValue),
    });
  };

  const onMaxBlur = e => {
    props.setFilter({
      [props.maxName]: getFilterValue(maxValue),
    });
  };

  const getFilterValue = value => {
    if (!!value) {
      if (props.asArray === true) {
        if (props.type === 'number') {
          return [Number(value)];
        } else {
          return [value];
        }
      } else {
        if (props.type === 'number') {
          return Number(value);
        } else {
          return value;
        }
      }
    } else {
      return null;
    }
  };

  const onMinValueChange = e => {
    setMinValue(e.target.value);
  };

  const onMaxValueChange = e => {
    setMaxValue(e.target.value);
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
            value={minValue}
            onChange={onMinValueChange}
            onBlur={onMinBlur}
          />
          <input
            className="min-max-filter"
            id={props.maxName}
            type={props.type}
            value={maxValue}
            onChange={onMaxValueChange}
            onBlur={onMaxBlur}
          />
        </div>
      </li>
    </ul>
  );
};

export default MinMaxFilter;
