import Axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { ListView } from '../../components/ListView';
import { Page } from '../../components/Page';
import { API_URL } from '../../constants';
import { loadSermons } from '../../store/actions/sermons';
import {
  getSermonsByCategory,
  searchSermons,
} from '../../store/reducers/sermons';

export const ServiceList = () => {
  const dispatch = useDispatch();
  const { category } = useParams<any>();
  const location = useLocation();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = React.useState('');
  const sermons = useSelector((s: any) =>
    getSermonsByCategory(s.sermons.allSermons || {}, category as string)
  );
  const searchQueryItems = useSelector((s: any) =>
    searchSermons(s.sermons.allSermons, searchQuery)
  );

  React.useEffect(() => {
    fetch();
  }, []);

  React.useEffect(() => {
    setSearchQuery('');
  }, [location.pathname]);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/sermons`);

      dispatch(loadSermons(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchQueryChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const data = searchQueryItems.length > 0 ? searchQueryItems : sermons;

  return (
    <Page title="Sermons">
      <ListView
        data={data}
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        activeCategory={category}
        location={location}
        history={history}
        type="sermon"
      />
    </Page>
  );
};
