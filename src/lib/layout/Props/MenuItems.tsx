import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type CardsType = {
  text: string;
  url: string;
  color: string;
  p: any;
};
function MenuItems({ text, url, color, p }: CardsType) {
  const router = useRouter();
  const getNavLinks = () => {
    if (router.asPath === url) return '3px solid #007F82';
  };
  return (
    <Box p={p} display="inline">
      <NextLink href={url} passHref>
        <Link
          color={color}
          fontSize="1rem"
          borderBottom={getNavLinks()}
          _hover={{ color: 'brand.200', textDecoration: 'unset' }}
          _focus={{ boxShadow: '0' }}
        >
          {text}
        </Link>
      </NextLink>
    </Box>
  );
}

export default MenuItems;
