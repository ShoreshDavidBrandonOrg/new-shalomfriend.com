import { Box, Button, Flex, Input, SimpleGrid, Stack } from '@chakra-ui/react';

import { Card } from '../../components/Card';
import { resourceCategories, sermonCategories } from '../../utils/categories';

export const ListView = ({
  data,
  searchQuery,
  onSearchQueryChange,
  activeCategory,
  type,
  history,
}: any) => {
  const categories = type === 'sermon' ? sermonCategories : resourceCategories;
  const path = type === 'sermon' ? 'services' : 'articles';

  return (
    <Flex
      align={{ base: 'center', md: 'flex-start' }}
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      minH="70vh"
      px={{ base: 4, md: 8 }}
      mb={16}
    >
      <Stack flex={0.1}>
        <Box px="8" w="100%" flexDirection="column" justifyContent="flex-start">
          <Input
            label="Search"
            placeholder="Search..."
            name="searchQuery"
            value={searchQuery}
            onChange={onSearchQueryChange}
            isFullWidth={false}
            w="300px"
            colorScheme="purple"
            bgColor="white"
            _placeholder={{
              color: 'gray.700',
            }}
            _focus={{
              borderColor: 'purple.400',
            }}
            mb="8"
          />
          {categories.map((option) => (
            <Button
              variant="categoryButton"
              bgColor={
                activeCategory === option.value ? 'purple.500' : 'purple.100'
              }
              color={activeCategory === option.value ? 'white' : 'purple.900'}
              onClick={() => history.push(`/${path}/${option.value}`)}
            >
              {option?.label}
            </Button>
          ))}
        </Box>
      </Stack>
      <Stack flex={0.9}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {data?.map(
            ({
              title,
              slug,
              externalLink,
              color,
              category: cat,
              featuredImage,
              showTitle,
              parts,
            }: any) => (
              <Card
                key={slug}
                title={title}
                category={cat}
                slug={slug}
                type={type}
                color={color}
                link={externalLink}
                featuredImage={featuredImage}
                isSeries={parts?.length > 0}
                showTitle={showTitle}
              />
            )
          )}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};
