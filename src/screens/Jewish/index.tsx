import Axios from 'axios';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../components/Card';
import { API_URL } from '../../constants';
import { loadResources } from '../../store/actions/resources';
import { getResourcesByType } from '../../store/reducers/resources';

export const Jewish = () => {
  const dispatch = useDispatch();
  const resources = useSelector((s: any) =>
    getResourcesByType(s.resources.allResources, 'jewish')
  );

  React.useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await Axios.get(`${API_URL}/resources`);
      dispatch(loadResources(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Jewish | Shalom Friend</title>
      </Helmet>
      <div className="container-fluid padding-50">
        <div className="jewish-page">
          <div className="row">
            {resources.map(
              (
                { externalLink, title, slug, color, featuredImage }: any,
                i: number
              ) => (
                <div className="col-sm-12 col-lg-3" key={i}>
                  <Card
                    title={title}
                    slug={slug}
                    link={externalLink}
                    color={color}
                    featuredImage={featuredImage}
                    type="jewish"
                    showTitle={true}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
