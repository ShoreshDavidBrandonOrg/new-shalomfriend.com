import { AspectRatio, Box, Heading, Image, Link, Tag } from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';

const CustomLink = ({
  link,
  type,
  category,
  slug,
  isSeries,
  children,
}: any) => {
  const rootLink =
    type === 'jewish'
      ? 'jewish'
      : type === 'sermon'
      ? 'services'
      : 'discoveries';

  const internalLink = isSeries
    ? `${rootLink}/${category}/${slug}?part=1`
    : `${rootLink}/${category}/${slug}`;

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (type === 'jewish') {
    return (
      <Link as={RLink} to={`/${type}/${slug}`}>
        {children}
      </Link>
    );
  }

  return (
    <Link as={RLink} to={`/${internalLink}`}>
      {children}
    </Link>
  );
};

interface Props {
  title: string;
  slug: string;
  link: string | null;
  color: string;
  type: string;
  category?: string;
  featuredImage?: string;
  isSeries?: boolean;
  showTitle?: boolean;
}

export const Card = ({
  title,
  slug,
  link,
  type,
  category,
  featuredImage,
  isSeries,
  showTitle,
}: Props) => {
  return (
    <Box position="relative" w="100%">
      <CustomLink
        type={type}
        link={link}
        slug={slug}
        category={category}
        isSeries={isSeries}
      >
        <AspectRatio ratio={16 / 9} minW="300" w="100%">
          <Image
            src={featuredImage}
            boxShadow="lg"
            // boxShadow="0 0 4px 2px #eee"
            borderRadius="8"
            transition="all 500ms ease"
            _hover={{
              transform: 'scale3d(1.05, 1.05, 1.05)',
              boxShadow: '2xl',
            }}
            background="linear-gradient(180deg,transparent,rgba(50,50,50,.35))"
          />
        </AspectRatio>
        <Box position="absolute" top="4" right="4">
          {true && <Tag textTransform="uppercase">Series</Tag>}
        </Box>
        <Box position="absolute" bottom="4" left="4">
          {showTitle && (
            <Heading color="white" size="md" textShadow="sm">
              {title}
            </Heading>
          )}
        </Box>
      </CustomLink>
    </Box>
  );
};
