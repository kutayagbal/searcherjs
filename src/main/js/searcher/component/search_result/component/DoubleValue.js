const DoubleValue = props => {
  return (
    <div className="multi-value-con">
      <label className="left-value">{props.left}</label>
      <label>{props.right}</label>
    </div>
  );
};

export default DoubleValue;
