import Axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { ListView } from '../../components/ListView';
import { Page } from '../../components/Page';
import { API_URL } from '../../constants';
import { loadResources } from '../../store/actions/resources';
import {
  getResourcesByCategory,
  searchResources,
} from '../../store/reducers/resources';

export const Articles = () => {
  const dispatch = useDispatch();
  const { category } = useParams<any>();
  const location = useLocation();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = React.useState('');
  const resources = useSelector((s: any) =>
    getResourcesByCategory(s?.resources?.allResources || {}, category as string)
  );
  const searchQueryItems = useSelector((s: any) =>
    searchResources(s.resources.allResources, searchQuery)
  );

  React.useEffect(() => {
    fetch();
  }, []);

  React.useEffect(() => {
    setSearchQuery('');
  }, [location.pathname]);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/resources`);

      dispatch(loadResources(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchQueryChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const data = searchQueryItems.length > 0 ? searchQueryItems : resources;

  return (
    <Page title="Articles">
      <ListView
        data={data}
        searchQuery=""
        onSearchQueryChange={onSearchQueryChange}
        activeCategory={category}
        location={location}
        history={history}
        type="articles"
      />
    </Page>
  );
};
