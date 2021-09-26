import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      '100': 'rgba(22,142,234,0.15)',
      '300': '#E8F4FD',
      '500': '#168eea',
      '600': '#1378C6',
    },
    green: {
      '100': 'rgba(106,182,22,0.15)',
      '500': '#42A644',
      '600': '#6AB616',
    },
    gray: {
      '100': '#F5F5F5',
      '200': '#E0E0E0',
      '300': '#D6DFE6',
      '400': '#C7CED2',
      '500': '#B0B9BF',
      '700': '#7D8E99',
      '900': '#353D41',
    },
  },
  textStyles: {
    body1: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '26px',
      color: 'gray.700',
    },
  },
  shadows: {
    sm: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    md: '0px 0px 20px #C4C4C4',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'gray.900',
      },
      variants: {
        h1: {
          fontSize: ['28px', '28px', '46px'],
          fontWeight: 700,
          lineHeight: ['32px', '32px', '52px'],
        },
        h2: {
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '39px',
        },
        h3: {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '29px',
          color: 'gray.900',
        },
        h4: {
          lineHeight: '44px',
          fontWeight: 500,
          fontSize: 32,
        },
        h6: {
          fontWeight: 600,
          fontSize: 20,
          color: 'gray.900',
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'purple.500',
        transition: 'color 200ms ease',
        _hover: {
          textDecoration: 'none',
          color: 'purple.700',
        },
      },
      variants: {
        footer: {
          color: 'whiteAlpha.800',
          _hover: { color: 'white' },
        },
      },
    },

    Button: {
      baseStyle: {
        borderRadius: 3,
        padding: 6,
      },
      variants: {
        categoryButton: {
          w: 300,
          justifyContent: 'flex-start',
          transition: 'all 100ms ease',
          _hover: {
            bgColor: 'purple.500',
            color: 'white',
          },
          _active: {
            bgColor: 'purple.500',
            color: 'white',
          },
          mb: '4',
        },
      },
    },
  },
});
