import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as RLink } from 'react-router-dom';

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Link as={RLink} to="/">
        <Text fontSize="lg" fontWeight="bold">
          Shalom Friend
        </Text>
      </Link>
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }: any) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link as={RLink} to={to} fontWeight="semibold">
        {children}
      </Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="purple.700"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="purple.700"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export const Header = (props: any) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      px={{ base: '6', md: '16' }}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['purple.700', 'purple.700', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="140px"
          color={['purple.700', 'purple.700', 'primary.500', 'primary.500']}
        />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/services">Teachings</MenuItem>
          <MenuItem to="/articles">Articles</MenuItem>
          <Link
            href="https://shalom-friend.square.site/"
            target="_blank"
            mb={{ base: 8, sm: 0 }}
            mr={{ base: 0, sm: 8 }}
            display="block"
            fontWeight="semibold"
          >
            Store
          </Link>
          <Link
            href="https://shalom-friend.square.site/product/thank-you-for-additional-donations-we-greatly-appreciate-you-/1"
            target="_blank"
          >
            <Button
              size="sm"
              rounded="md"
              color={['white', 'white', 'white', 'white']}
              bg={['purple.700', 'purple.700', 'primary.500', 'primary.500']}
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              Donate
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
