import { Box, BoxProps, Flex } from '@chakra-ui/react';
import * as React from 'react';
import Helmet from 'react-helmet';

import { Header } from '../Header';

interface Props extends BoxProps {
  title: string;
  children: React.ReactNode;
}

export const Page = ({ title, children, ...rest }: Props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Shalom Friend</title>
      </Helmet>
      <Flex
        direction="column"
        align={{ base: 'flex-start', md: 'center' }}
        m="0 auto"
        bgColor="purple.50"
        minH="100vh"
        w="100%"
        // {...rest}
      >
        {/* <Box bgColor="purple.50" w="100%"> */}
        <Header />
        {/* </Box> */}
        <Box direction="column" align="center" m="0 auto" {...rest}>
          {children}
        </Box>
      </Flex>
    </React.Fragment>
  );
};
