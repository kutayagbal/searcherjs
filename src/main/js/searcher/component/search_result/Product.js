import { useEffect, useState } from 'react';
import House from './House';

const Product = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [offerAmount, setOfferAmount] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    generateUrl();
  }, []);

  const openImages = () => {
    const request = new Request(
      'http://localhost:8080/openimages?path=' + props.product.imageFolder,
      {
        method: 'GET',
      }
    );

    setIsLoading(true);
    fetch(request)
      .catch(error => console.error(error))
      .finally(setIsLoading(false));
  };

  const follow = () => {
    const request = new Request('http://localhost:8080/follow?id=' + props.product.id, {
      method: 'GET',
    });

    setIsLoading(true);
    fetch(request)
      .then(() => props.toggleForceSearch())
      .catch(error => console.error(error))
      .finally(setIsLoading(false));
  };

  const stopFollow = () => {
    if (window.confirm('Are you sure?')) {
      const request = new Request('http://localhost:8080/stopfollow?id=' + props.product.id, {
        method: 'GET',
      });

      setIsLoading(true);
      fetch(request)
        .then(() => props.toggleForceSearch())
        .catch(error => console.error(error))
        .finally(setIsLoading(false));
    }
  };
  const unfollow = () => {
    const request = new Request('http://localhost:8080/unfollow?id=' + props.product.id, {
      method: 'GET',
    });

    setIsLoading(true);
    fetch(request)
      .then(() => props.toggleForceSearch())
      .catch(error => console.error(error))
      .finally(setIsLoading(false));
  };

  const stopUnfollow = () => {
    const request = new Request('http://localhost:8080/stopunfollow?id=' + props.product.id, {
      method: 'GET',
    });

    setIsLoading(true);
    fetch(request)
      .then(() => props.toggleForceSearch())
      .catch(error => console.error(error))
      .finally(setIsLoading(false));
  };
  const contact = () => {
    if (window.confirm('Are you sure to Coontact?')) {
      const request = new Request('http://localhost:8080/contact?id=' + props.product.id, {
        method: 'GET',
      });

      setIsLoading(true);
      fetch(request)
        .then(() => props.toggleForceSearch())
        .catch(error => console.error(error))
        .finally(setIsLoading(false));
    }
  };

  const view = () => {
    if (window.confirm('Are you sure to View?')) {
      const request = new Request('http://localhost:8080/view?id=' + props.product.id, {
        method: 'GET',
      });

      setIsLoading(true);
      fetch(request)
        .then(() => props.toggleForceSearch())
        .catch(error => console.error(error))
        .finally(setIsLoading(false));
    }
  };

  const offer = () => {
    if (offerAmount > 0) {
      if (window.confirm('Are you sure to Offer?')) {
        const request = new Request(
          'http://localhost:8080/offer?id=' + props.product.id + '&amount=' + offerAmount,
          {
            method: 'GET',
          }
        );

        setIsLoading(true);
        fetch(request)
          .then(() => props.toggleForceSearch())
          .catch(error => console.error(error))
          .finally(setIsLoading(false));
      }
    }
  };

  const onOfferChange = e => {
    setOfferAmount(e.target.value);
  };

  const generateUrl = () => {
    let endpoint = props.product.endpoint;
    setUrl(
      endpoint.protocol +
        '://' +
        endpoint.host +
        (endpoint.port < 0 ? '' : ':' + String(endpoint.port)) +
        '/' +
        endpoint.path
    );
  };

  const renderName = () => (
    <div className="product-name-con">
      <a rel="noreferrer" href={url} target="_blank">
        {props.product.name}
      </a>
    </div>
  );

  const renderPrice = () => {
    return (
      <div className="product-prices-con">
        <div>
          <label className="product-price">{props.product.price.toLocaleString()}</label>
          <label className="product-unit-price">
            {props.product.unitPrice !== null ? props.product.unitPrice.toLocaleString() : ''}
          </label>
        </div>
      </div>
    );
  };

  const renderStatus = () => {
    if (!props.product.status) {
      return;
    }
    return (
      <div className="product-status-con">
        <label className="product-status">{props.product.status}</label>
      </div>
    );
  };

  const renderActionButtons = () => {
    let followed = props.product.actionHistory.find(hist => hist.actionType === 'FOLLOWED');
    if (followed !== undefined) {
      let contacted = props.product.actionHistory.find(hist => hist.actionType === 'CONTACTED');
      let viewed = props.product.actionHistory.find(hist => hist.actionType === 'VIEWED');
      let offered = props.product.actionHistory.find(hist => hist.actionType === 'OFFERED');

      return (
        <ul className="action-buttons">
          <li className="action-button-list-left">
            {props.product.imageFolder && (
              <button className="action-button contact-button" onClick={() => openImages()}>
                img
              </button>
            )}

            {contacted === undefined && viewed === undefined && offered === undefined && (
              <button className="action-button contact-button" onClick={() => contact()}>
                contact
              </button>
            )}

            {viewed === undefined && offered === undefined && (
              <button className="action-button view-button" onClick={() => view()}>
                view
              </button>
            )}

            {offered === undefined && (
              <button className="action-button positive-button" onClick={() => offer()}>
                offer
              </button>
            )}
            {offered === undefined && (
              <input
                name="offerAmount"
                className="offer-input"
                type="number"
                value={offerAmount}
                onChange={onOfferChange}
                autoComplete="off"
              />
            )}
          </li>

          <li className="action-button-list-right">
            <button className="action-button negative-button" onClick={() => stopFollow()}>
              stop follow
            </button>
          </li>
        </ul>
      );
    } else {
      let unfollowed = props.product.actionHistory.find(hist => hist.actionType === 'UNFOLLOWED');
      if (unfollowed !== undefined) {
        return (
          <button className="action-button positive-button" onClick={() => stopUnfollow()}>
            stop unfollow
          </button>
        );
      } else {
        return (
          <div className="follow-unfollow-con">
            <button
              className="action-button action-button-left positive-button"
              onClick={() => follow()}
            >
              follow
            </button>
            <button
              className="action-button action-button-right negative-button"
              onClick={() => unfollow()}
            >
              unfollow
            </button>
          </div>
        );
      }
    }
  };

  const renderStatusHistory = () => (
    <ul className="history-list">
      {props.product.statusHistory.map((hist, index) => (
        <li key={'status' + index}>
          <label className="history-date">{hist.date + ' : '}</label>
          <label className="history-value">{hist.value}</label>
        </li>
      ))}
    </ul>
  );

  const renderPriceHistory = () => (
    <ul className="history-list">
      {props.product.priceHistory.map((hist, index) => (
        <li key={'price' + index}>
          <label className="history-date">{hist.date + ' : '}</label>
          <label className="history-value">
            {hist.value !== null ? Number(hist.value).toLocaleString() : ''}
          </label>
        </li>
      ))}
    </ul>
  );

  const renderActionHistory = () => (
    <div className="action-history">
      {props.product.actionHistory.map(history => (
        <div key={history.actionType}>
          <label className="history-date">{history.date + ' : '}</label>
          <label className="history-value">{history.actionType}</label>
          {history.value && history.actionType === 'OFFERED' && (
            <label className="history-value">{Number(history.value).toLocaleString()}</label>
          )}
        </div>
      ))}
    </div>
  );

  const getProductClass = () => {
    if (isLoading === true) {
      return 'product-disabled';
    }

    if (props.product.actionHistory == null || props.product.actionHistory.length === 0) {
      return 'product';
    }

    let unfollowed = props.product.actionHistory.find(hist => hist.actionType === 'UNFOLLOWED');
    let followed = props.product.actionHistory.find(hist => hist.actionType === 'FOLLOWED');
    let contacted = props.product.actionHistory.find(hist => hist.actionType === 'CONTACTED');
    let viewed = props.product.actionHistory.find(hist => hist.actionType === 'VIEWED');
    let offered = props.product.actionHistory.find(hist => hist.actionType === 'OFFERED');

    if (unfollowed !== undefined) {
      return 'product unfollowed-product';
    } else if (offered !== undefined) {
      return 'product offered-product';
    } else if (viewed !== undefined) {
      return 'product viewed-product';
    } else if (contacted !== undefined) {
      return 'product contacted-product';
    } else if (followed !== undefined) {
      return 'product followed-product';
    } else {
      return 'product';
    }
  };

  return (
    <div id={props.product.id} className={getProductClass()}>
      {renderName()}
      {renderPrice()}
      {renderStatus()}
      <House product={props.product} />
      {renderActionButtons()}
      {props.product.actionHistory.length > 0 && renderActionHistory()}

      <div className="history-con">
        {props.product.statusHistory.length > 0 && (
          <div className="status-history">{renderStatusHistory()}</div>
        )}
        {props.product.priceHistory.length > 0 && (
          <div className="price-history">{renderPriceHistory()}</div>
        )}
      </div>
    </div>
  );
};

export default Product;
