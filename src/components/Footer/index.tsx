import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { MailIcon } from '@heroicons/react/solid';
import Axios from 'axios';
import * as React from 'react';
import { Link as RLink } from 'react-router-dom';

import { API_URL } from '../../constants';

const Logo = () => {
  return <Heading color="white">Shalom Friend</Heading>;
};

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const toast = useToast();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await Axios.post(`${API_URL}/email`, {
        name,
        email,
      });

      // setState({ ...state, data: 'Registration successful!' });
      window.open(
        'https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/friend-book-ninth-printing.pdf',
        '_blank'
      );
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message,
        description: 'Please try again later',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bg={useColorModeValue('purple.900', 'purple.900')}
      color="white"
      // color={useColorModeValue('white', 'white')}
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <ListHeader>Navigation</ListHeader>
            <Link as={RLink} to="/" variant="footer">
              Home
            </Link>
            <Link as={RLink} to="/services/rabbi-don" variant="footer">
              Teachings
            </Link>
            <Link as={RLink} to="/articles" variant="footer">
              Articles
            </Link>
            <Link
              href="https://shalom-friend.square.site/"
              variant="footer"
              target="_blank"
            >
              Store
            </Link>
            <Link
              href="https://shalom-friend.square.site/product/thank-you-for-additional-donations-we-greatly-appreciate-you-/1"
              target="_blank"
              variant="footer"
            >
              Donate
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Legal</ListHeader>
            <Link as={RLink} to="/privacy-policy" variant="footer">
              Privacy Policy
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction="column">
              <Input
                placeholder="Name"
                bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
                border={0}
                boxShadow="lg"
                w="100%"
                _placeholder={{
                  color: 'gray.700',
                }}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email"
                bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
                border={0}
                boxShadow="lg"
                w="100%"
                _placeholder={{
                  color: 'gray.700',
                }}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <IconButton
                bg={useColorModeValue('purple.400', 'purple.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'purple.700',
                }}
                _active={{
                  bg: 'purple.700',
                }}
                boxShadow="lg"
                aria-label="Subscribe"
                icon={<MailIcon style={{ height: 24 }} />}
                onClick={handleSubmit}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('blackAlpha.500', 'blackAlpha.500'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('blackAlpha.500', 'blackAlpha.500'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize="sm" textAlign="center">
          © 2021 Shalom Friend. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};
