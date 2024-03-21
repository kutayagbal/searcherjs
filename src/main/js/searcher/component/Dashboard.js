import '../../../css/App.css';
import { useState } from 'react';
import ProductSearchBar from './search_bar/ProductSearchBar';
import Product from './search_result/Product';

const Dashboard = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [forceSearch, setForceSearch] = useState(false);

  const toggleForceSearch = () => {
    setForceSearch(!forceSearch);
  };
  const search = (searchParameters, sortByUnitPrice) => {
    if (!!searchParameters.tradeType && !!searchParameters.productType) {
      const request = new Request('http://localhost:8080/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParameters),
      });

      setIsLoading(true);
      fetch(request)
        .then(response => {
          response.json().then(data => {
            if (sortByUnitPrice === true) {
              data.sort((product0, product1) =>
                product0.unitPrice > product1.unitPrice
                  ? 1
                  : product0.unitPrice < product1.unitPrice
                  ? -1
                  : 0
              );
            }

            setProducts(data);
          });
        })
        .catch(error => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <ProductSearchBar isLoading={isLoading} search={search} forceSearch={forceSearch} />
      {products.length > 0 && (
        <div className={isLoading ? 'product-row-disabled' : 'product-row'}>
          {products.map(product => (
            <div className="product-column" key={product.id}>
              <Product product={product} toggleForceSearch={toggleForceSearch} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
