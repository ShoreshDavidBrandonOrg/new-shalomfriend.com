import { Heading, Image, Spacer } from '@chakra-ui/react';

import notFound from '../../assets/img/not-found.svg';
import { Page } from '../../components/Page';

export const NotFound = () => (
  <Page title="Not Found" p="16">
    <Heading>Page Not Found</Heading>
    <Spacer mb="8" />
    <Image src={notFound} />
  </Page>
);
