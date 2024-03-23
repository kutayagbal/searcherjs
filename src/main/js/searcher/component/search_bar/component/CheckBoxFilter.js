import { useState } from 'react';

const CheckBoxFilter = props => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckedChange = e => {
    setIsChecked(e.target.checked);
    props.setFilter(e.target.checked === true ? true : false);
  };

  return (
    <ul className="search-param-con">
      <li>
        <label
          htmlFor={props.name}
          className={isChecked === true ? 'search-param-label-active' : 'search-param-label'}
        >
          {props.label}
        </label>
        <input
          id={props.name}
          className="checkbox-filter"
          type="checkbox"
          onChange={onCheckedChange}
          checked={isChecked === true}
        />
      </li>
    </ul>
  );
};

export default CheckBoxFilter;
