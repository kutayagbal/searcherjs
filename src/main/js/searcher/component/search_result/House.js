import SigleValue from './component/SigleValue';
import DoubleValue from './component/DoubleValue';
import TripleValue from './component/TripleValue';

const House = props => {
  let { story, totalStory, bedroom, totalRoom, serviceCost } = props.product;
  if (story === undefined || story === null) {
    story = '';
  }
  if (totalStory === undefined || totalStory === null) {
    totalStory = '';
  }
  if (bedroom === undefined || bedroom === null) {
    bedroom = '';
  }
  if (totalRoom === undefined || totalRoom === null) {
    totalRoom = '';
  }
  if (serviceCost === undefined || serviceCost === null) {
    serviceCost = '';
  }
  return (
    <div className="house-con">
      <TripleValue
        left={props.product.postalCode}
        middle={serviceCost}
        right={props.product.city}
      ></TripleValue>
      <DoubleValue
        left={props.product.propertyType}
        right={props.product.constructionYear}
      ></DoubleValue>
      <SigleValue label="Area :" value={props.product.livingArea}></SigleValue>
      <SigleValue label="Bedroom :" value={bedroom + '/' + totalRoom}></SigleValue>
      <SigleValue label="Energy Label :" value={props.product.energyLabel}></SigleValue>
      <SigleValue label="Story :" value={story + '/' + totalStory}></SigleValue>
    </div>
  );
};

export default House;
