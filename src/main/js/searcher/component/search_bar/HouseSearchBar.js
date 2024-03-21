import MultiSelectFilter from './component/MultiSelectFilter';
import MinMaxFilter from './component/MinMaxFilter';

const HouseSearchBar = props => {
  return (
    <div>
      <MultiSelectFilter
        label="Property Types"
        name="propertyTypes"
        isSmall={true}
        url="http://localhost:8080/house/propertyTypes"
        setFilter={props.setFilterParameter}
        dependencies={[props.tradeType, props.productType, props.siteNames, props.productStates]}
        requestParameters={{
          tradeType: props.tradeType,
          productType: props.productType,
          siteNames: props.siteNames,
          productStates: props.productStates,
        }}
      ></MultiSelectFilter>
      <MultiSelectFilter
        label="Cities"
        name="cities"
        isSmall={true}
        url="http://localhost:8080/house/cities"
        setFilter={props.setFilterParameter}
        dependencies={[
          props.tradeType,
          props.productType,
          props.siteNames,
          props.productStates,
          props.filterParameters.propertyTypes,
        ]}
        requestParameters={{
          tradeType: props.tradeType,
          productType: props.productType,
          siteNames: props.siteNames,
          productStates: props.productStates,
          propertyTypes: props.filterParameters.propertyTypes,
        }}
      ></MultiSelectFilter>
      <MultiSelectFilter
        label="Postal Codes"
        name="postalCodes"
        isSmall={false}
        url="http://localhost:8080/house/postalCodes"
        setFilter={props.setFilterParameter}
        dependencies={[
          props.tradeType,
          props.productType,
          props.siteNames,
          props.productStates,
          props.filterParameters.propertyTypes,
          props.filterParameters.cities,
        ]}
        requestParameters={{
          tradeType: props.tradeType,
          productType: props.productType,
          siteNames: props.siteNames,
          productStates: props.productStates,
          propertyTypes: props.filterParameters.propertyTypes,
          cities: props.filterParameters.cities,
        }}
      ></MultiSelectFilter>

      <MultiSelectFilter
        label="Stories"
        name="stories"
        url="http://localhost:8080/house/stories"
        setFilter={props.setFilterParameter}
        dependencies={[
          props.tradeType,
          props.productType,
          props.siteNames,
          props.productStates,
          props.filterParameters.propertyTypes,
          props.filterParameters.cities,
          props.filterParameters.postalCodes,
        ]}
        requestParameters={{
          tradeType: props.tradeType,
          productType: props.productType,
          siteNames: props.siteNames,
          productStates: props.productStates,
          propertyTypes: props.filterParameters.propertyTypes,
          cities: props.filterParameters.cities,
          postalCodes: props.filterParameters.postalCodes,
        }}
      ></MultiSelectFilter>
      <MinMaxFilter
        label="Const Year"
        type="number"
        minName="minConstructionYear"
        maxName="maxConstructionYear"
        setFilter={props.setFilterParameter}
      ></MinMaxFilter>
      <MinMaxFilter
        label="Living Area"
        type="number"
        minName="minLivingArea"
        maxName="maxLivingArea"
        setFilter={props.setFilterParameter}
      ></MinMaxFilter>
      <MinMaxFilter
        label="Bedroom"
        type="number"
        minName="minBedroom"
        maxName="maxBedroom"
        setFilter={props.setFilterParameter}
      ></MinMaxFilter>
      <MinMaxFilter
        label="Energy Label"
        type="text"
        minName="minEnergyLabel"
        maxName="maxEnergyLabel"
        setFilter={props.setFilterParameter}
      ></MinMaxFilter>
    </div>
  );
};

export default HouseSearchBar;
