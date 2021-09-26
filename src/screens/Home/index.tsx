import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';

import { Hero } from '../../components/Hero';
import { Page } from '../../components/Page';

import { beliefs } from './beliefs';

export const Home = () => (
  <Page title="Home">
    <Box maxW={{ base: '100%', lg: '70%' }} mb="16">
      <Hero />
    </Box>
    <Box w="70%" mb="16" textAlign="left">
      <Heading textAlign="center" py="4">
        Rabbi Don
      </Heading>
      <Text py="2">
        Rabbi Don Goldstein led Shoresh David Messianic Synagogue in Brandon.
        Here you will meet both Jews and Gentiles who are genuinely warm,
        loving, friendly and caring. Ours is not your standard boring service
        where you come, listen, go home and nothing changes. We don’t talk about
        what God “can” do, you’ll see Him do it! Rabbi Don’s messages come from
        God’s Word and are delivered in an easy to understand way. You can view
        his past messages by&nbsp;
        <Link as={RLink} to="/services/rabbi-don" fontWeight="semibold">
          <span>clicking here.</span>
        </Link>
      </Text>
      <Text py="2">
        We invite you to come and worship the God of Abraham, Isaac and Jacob
        with Messianic Music, Davidic Dance, Anointed Teachings, and Life
        Changing Healings. We also encourage you to spend some time exploring
        our unique website.
      </Text>

      <Text py="2">
        Both Rabbi Don and Jackie were born and raised Jewish so their teachings
        come from their genuine Jewish experience and their 30+ years of walking
        with the Messiah. So come! Discover your roots as they are clearly
        explained.
      </Text>
    </Box>

    <Box w="70%" mb="16">
      <Accordion backgroundColor="white" allowMultiple>
        {beliefs.map((belief) => (
          <AccordionItem mb="8">
            <AccordionButton p="4">
              <Box flex="1" textAlign="left">
                <Heading fontSize="md">{belief.heading}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p="4" textAlign="left">
              {belief.text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </Page>
);
