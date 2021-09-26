import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';

import image from '../../assets/img/rabbi-don-circle.png';

export const Hero = ({ ...rest }: any) => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={{ base: 4, md: 8 }}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Shalom Friend
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          Join us in continuing Rabbi Don Goldstein's legacy of bringing the
          pre-believers to Yeshua
        </Heading>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} shadow="2xl" borderRadius="100%" w="100%" />
      </Box>
    </Flex>
  );
};
