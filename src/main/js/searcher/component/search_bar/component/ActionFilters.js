import { useState } from 'react';

const ActionFilters = props => {
  const [followed, setFollowed] = useState('');
  const [unfollowed, setUnfollowed] = useState('');
  const [contacted, setContacted] = useState('');
  const [viewed, setViewed] = useState('');
  const [offered, setOffered] = useState('');

  const onFollowedFilterChanged = e => {
    if (e.target.checked === true) {
      setFollowed('');
      props.setFilter({ followed: '' });
    }
  };

  const onUnfollowedFilterChanged = e => {
    if (e.target.checked === true) {
      setUnfollowed('');
      props.setFilter({ unfollowed: '' });
    }
  };

  const onContactedFilterChanged = e => {
    if (e.target.checked === true) {
      setContacted('');
      props.setFilter({ contacted: '' });
    }
  };

  const onViewedFilterChanged = e => {
    if (e.target.checked === true) {
      setViewed('');
      props.setFilter({ viewed: '' });
    }
  };

  const onOfferedFilterChanged = e => {
    if (e.target.checked === true) {
      setOffered('');
      props.setFilter({ offered: '' });
    }
  };

  const onOnlyFollowedChanged = e => {
    if (e.target.checked === true) {
      setFollowed(true);
      props.setFilter({ followed: true });
    }
  };

  const onNotFollowedChanged = e => {
    if (e.target.checked === true) {
      setFollowed(false);
      props.setFilter({ followed: false });
    }
  };

  const onOnlyContactedChanged = e => {
    if (e.target.checked === true) {
      setContacted(true);
      props.setFilter({ contacted: true });
    }
  };
  const onNotContactedChanged = e => {
    if (e.target.checked === true) {
      setContacted(false);
      props.setFilter({ contacted: false });
    }
  };

  const onOnlyViewedChanged = e => {
    if (e.target.checked === true) {
      setViewed(true);
      props.setFilter({ viewed: true });
    }
  };
  const onNotViewedChanged = e => {
    if (e.target.checked === true) {
      setViewed(false);
      props.setFilter({ viewed: false });
    }
  };

  const onOnlyOfferedChanged = e => {
    if (e.target.checked === true) {
      setOffered(true);
      props.setFilter({ offered: true });
    }
  };
  const onNotOfferedChanged = e => {
    if (e.target.checked === true) {
      setOffered(false);
      props.setFilter({ offered: false });
    }
  };

  const onOnlyUnfollowedChanged = e => {
    if (e.target.checked === true) {
      setUnfollowed(true);
      props.setFilter({ unfollowed: true });
    }
  };
  const onNotUnfollowedChanged = e => {
    if (e.target.checked === true) {
      setUnfollowed(false);
      props.setFilter({ unfollowed: false });
    }
  };

  return (
    <ul className="search-param-con">
      <li>
        <label
          className={
            followed !== '' ||
            unfollowed !== '' ||
            contacted !== '' ||
            viewed !== '' ||
            offered !== ''
              ? 'search-param-label-active'
              : 'search-param-label'
          }
          htmlFor="followedFilter"
        >
          Action Filters
        </label>
      </li>
      <div className="action-filter-con">
        <li className="action-filter">only out</li>
        <li className="action-filter">
          <input
            className="action-filter-empty"
            type="radio"
            id="followedFilter"
            name="followed"
            onChange={onFollowedFilterChanged}
            checked={followed === ''}
          />
          <label htmlFor="onlyFollowed">followed</label>
          <input
            type="radio"
            id="onlyFollowed"
            name="followed"
            onChange={onOnlyFollowedChanged}
            checked={followed === true}
          />
          <input
            type="radio"
            id="notFollowed"
            name="followed"
            onChange={onNotFollowedChanged}
            checked={followed === false}
          />
        </li>
        <input
          className="action-filter-empty"
          type="radio"
          id="contactedFilter"
          name="contacted"
          onChange={onContactedFilterChanged}
          checked={contacted === ''}
        />
        <li className="action-filter">
          <label htmlFor="onlyContacted">contacted</label>
          <input
            type="radio"
            id="onlyContacted"
            name="contacted"
            onChange={onOnlyContactedChanged}
            checked={contacted === true}
          />
          <input
            type="radio"
            id="notContacted"
            name="contacted"
            onChange={onNotContactedChanged}
            checked={contacted === false}
          />
        </li>
        <input
          className="action-filter-empty"
          type="radio"
          id="viewedFilter"
          name="viewed"
          onChange={onViewedFilterChanged}
          checked={viewed === ''}
        />
        <li className="action-filter">
          <label htmlFor="onlyViewed">viewed</label>
          <input
            type="radio"
            id="onlyViewed"
            name="viewed"
            onChange={onOnlyViewedChanged}
            checked={viewed === true}
          />
          <input
            type="radio"
            id="notViewed"
            name="viewed"
            onChange={onNotViewedChanged}
            checked={viewed === false}
          />
        </li>
        <input
          className="action-filter-empty"
          type="radio"
          id="offeredFilter"
          name="offered"
          onChange={onOfferedFilterChanged}
          checked={offered === ''}
        />
        <li className="action-filter">
          <label htmlFor="onlyOffered">offered</label>
          <input
            type="radio"
            id="onlyOffered"
            name="offered"
            onChange={onOnlyOfferedChanged}
            checked={offered === true}
          />
          <input
            type="radio"
            id="notOffered"
            name="offered"
            onChange={onNotOfferedChanged}
            checked={offered === false}
          />
        </li>
        <input
          className="action-filter-empty"
          type="radio"
          id="unfollowedFilter"
          name="unfollowed"
          onChange={onUnfollowedFilterChanged}
          checked={unfollowed === ''}
        />
        <li className="action-filter">
          <label htmlFor="onlyUnfollowed">unfollowed</label>
          <input
            type="radio"
            id="onlyUnfollowed"
            name="unfollowed"
            onChange={onOnlyUnfollowedChanged}
            checked={unfollowed === true}
          />
          <input
            type="radio"
            id="notUnfollowed"
            name="unfollowed"
            onChange={onNotUnfollowedChanged}
            checked={unfollowed === false}
          />
        </li>
      </div>
    </ul>
  );
};

export default ActionFilters;
