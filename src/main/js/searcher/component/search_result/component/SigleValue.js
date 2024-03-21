const SingleValue = props => {
  return (
    <div className="single-value-con">
      <label className="single-value-label">{props.label}</label>
      <label className="single-value">{!!props.value ? props.value : '.'}</label>
    </div>
  );
};

export default SingleValue;
