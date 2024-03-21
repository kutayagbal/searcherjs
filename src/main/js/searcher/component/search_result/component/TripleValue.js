const TripleValue = props => {
  return (
    <div className="multi-value-con">
      <label className="left-value">{props.left}</label>
      <label className="middle-value">{props.middle}</label>
      <label>{props.right}</label>
    </div>
  );
};

export default TripleValue;
