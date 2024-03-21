import { useState } from 'react';

const InputFilter = props => {
  const [value, setValue] = useState('');

  const onValueChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    props.setFilter({
      [props.name]: !!e.target.value
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
          htmlFor={props.name}
          className={!!value ? 'search-param-label-active' : 'search-param-label'}
        >
          {props.label}
        </label>
        <input
          className="input-filter"
          id={props.name}
          type={props.type}
          value={value}
          onChange={onValueChange}
          onBlur={onBlur}
        ></input>
      </li>
    </ul>
  );
};

export default InputFilter;
