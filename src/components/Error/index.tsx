import { Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Page } from '../Page';

interface ErrorProps {
  error: string | null | undefined;
}

export const Error = ({ error }: ErrorProps) => (
  <>
    <Page title="Error">
      <Heading>Uh-oh</Heading>
      <Text>
        Sorry about that! Please try again later or go <Link to="/">home</Link>
      </Text>
      <Text>
        Here's the error message from our server:{' '}
        <span style={{ fontWeight: 700 }}>{error}</span>
      </Text>
    </Page>
    <Footer />
  </>
);
