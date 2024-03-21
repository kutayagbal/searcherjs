import HouseSearchBar from './HouseSearchBar';
import SelectFilter from './component/SelectFilter';
import MultiSelectFilter from './component/MultiSelectFilter';
import MinMaxFilter from './component/MinMaxFilter';
import ActionFilters from './component/ActionFilters';
import { useEffect, useState } from 'react';
import InputFilter from './component/InputFilter';
import CheckBoxFilter from './component/CheckBoxFilter';

const ProductSearchBar = props => {
  const [sortByUnitPrice, setSortByUnitPrice] = useState(false);
  const [searchParameters, setSearchParameters] = useState({
    tradeType: null,
    productType: null,
    siteNames: null,
    minPrice: null,
    maxPrice: null,
    name: null,
    description: null,
    productStates: null,
    filterParameters: {},
  });

  useEffect(() => {
    props.search(searchParameters, sortByUnitPrice);
  }, [searchParameters, sortByUnitPrice, props.forceSearch]);

  const setFilterParameter = parameter => {
    setSearchParameters({
      ...searchParameters,
      filterParameters: { ...searchParameters.filterParameters, ...parameter },
    });
  };

  const setFilter = filter => {
    setSearchParameters({ ...searchParameters, ...filter });
  };

  return (
    <div className={props.isLoading ? 'search-bar-con-disabled' : 'search-bar-con'}>
      <div className="search-params-con">
        <div className="trade-product-con">
          <SelectFilter
            label="Trade"
            name="tradeType"
            url="http://localhost:8080/product/tradeTypes"
            setFilter={setFilter}
            dependencies={[]}
          ></SelectFilter>

          {!!searchParameters.tradeType && (
            <SelectFilter
              label="Product"
              name="productType"
              url={
                'http://localhost:8080/product/productTypes?tradeType=' + searchParameters.tradeType
              }
              setFilter={setFilter}
              dependencies={[searchParameters.tradeType]}
            ></SelectFilter>
          )}
        </div>

        <div>
          <MultiSelectFilter
            label="Site Names"
            name="siteNames"
            isSmall={true}
            url="http://localhost:8080/product/siteNames"
            setFilter={setFilter}
            dependencies={[searchParameters.tradeType, searchParameters.productType]}
            requestParameters={{
              tradeType: searchParameters.tradeType,
              productType: searchParameters.productType,
            }}
          ></MultiSelectFilter>
          <MinMaxFilter
            label="Price"
            type="number"
            minName="minPrice"
            maxName="maxPrice"
            setFilter={setFilter}
          ></MinMaxFilter>
          <InputFilter name="name" label="Name" type="text" setFilter={setFilter}></InputFilter>
          <InputFilter
            name="description"
            label="Desc"
            type="text"
            setFilter={setFilter}
          ></InputFilter>
          <MultiSelectFilter
            label="Product States"
            name="productStates"
            url="http://localhost:8080/product/states"
            setFilter={setFilter}
            dependencies={[
              searchParameters.tradeType,
              searchParameters.productType,
              searchParameters.siteNames,
            ]}
            requestParameters={{
              tradeType: searchParameters.tradeType,
              productType: searchParameters.productType,
              siteNames: searchParameters.siteNames,
            }}
          ></MultiSelectFilter>

          {searchParameters.productType === 'HOUSE' && (
            <HouseSearchBar
              setFilterParameter={setFilterParameter}
              tradeType={searchParameters.tradeType}
              productType={searchParameters.productType}
              siteNames={searchParameters.siteNames}
              productStates={searchParameters.productStates}
              filterParameters={searchParameters.filterParameters}
            ></HouseSearchBar>
          )}

          <ActionFilters setFilter={setFilter}></ActionFilters>

          <CheckBoxFilter
            name="sortByUnitPrice"
            label="Sort by unit"
            setFilter={setSortByUnitPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSearchBar;
