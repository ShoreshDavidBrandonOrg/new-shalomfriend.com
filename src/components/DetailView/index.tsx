import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import * as h from 'history';
import { useHistory } from 'react-router-dom';

interface Props {
  data: any;
  history: h.History;
  partFromQueryParams?: string | undefined;
  selectedPart?: any;
  resource?: 'services' | 'discoveries';
}

const RightSide = ({ data, selectedPart }: any) => {
  if (data?.parts?.length > 0) {
    return (
      <Stack direction="column" w="100%">
        <AspectRatio ratio={16 / 9} maxW="100%" w="100%" m="0" p="0">
          <iframe
            src={selectedPart?.video}
            allowFullScreen
            style={{ width: '100%', height: '100%', margin: 0 }}
          />
        </AspectRatio>
      </Stack>
    );
  }

  return (
    <Stack>
      <AspectRatio ratio={16 / 9} w="100%">
        <iframe src={data?.video} allowFullScreen style={{ width: '100%' }} />
      </AspectRatio>
      {/* <Spacer mb="8" /> */}
    </Stack>
  );
};

export const DetailView = ({ data, selectedPart, resource }: Props) => {
  console.log(selectedPart);
  const isMobile = useMediaQuery('(max-width: 800px)');
  const history = useHistory();

  const handleSelect = (value: any) => {
    console.log(value);
    history.push(`/${resource}/${data?.category}/${data?.slug}?part=${value}`);
  };

  const options: any[] = [];
  data.parts.map((part: any) =>
    options.push({ value: part.order, label: `Part ${part.order}` })
  );

  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      minH="70vh"
      px={{ base: 4, md: 8 }}
      mb={16}
    >
      <Stack
        flex={0.4}
        direction={isMobile ? 'column' : 'row'}
        alignItems="flex-start"
        justifyContent="flex-start"
        px="8"
      >
        <AspectRatio ratio={16 / 9} w="100%" position="relative">
          <Image
            src={data?.featuredImage}
            borderRadius="8"
            background="linear-gradient(180deg,transparent,rgba(50,50,50,.35))"
            shadow="md"
          />
        </AspectRatio>
        {data?.showTitle && <Heading size="lg">{data?.title}</Heading>}
        {data?.parts?.length > 0 && (
          <Menu closeOnBlur closeOnSelect matchWidth>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon style={{ height: 24 }} />}
              colorScheme="purple"
              w="lg"
            >
              {selectedPart ? `Part ${selectedPart?.order}` : 'Select Part'}
            </MenuButton>
            <MenuList>
              {options.map((option: any) => (
                <MenuItem onClick={() => handleSelect(option?.value)}>
                  {option?.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}
      </Stack>
      <Stack
        flex={0.6}
        direction={isMobile ? 'column' : 'row'}
        alignItems="flex-start"
        justifyContent="flex-start"
        // px="8"
      >
        <RightSide data={data} history={history} selectedPart={selectedPart} />
      </Stack>
    </Flex>
  );
};
