import {
  Box,
  Flex,
  GridItem,
  Square,
  VStack,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react';
import React from 'react';

import { FiArrowUpRight } from 'react-icons/fi';
import NextLink from 'next/link';

type CardsType = {
  title: string;
  note: string;
  icon: any;
  categoryId: number;
  link: string;
};
function Cards({ title, note, icon, categoryId, link }: CardsType) {
  return (
    <GridItem w="100%">
      <Flex
        bgColor="white"
        boxShadow="0px 4px 21px rgba(5, 156, 159, 0.11)"
        borderRadius="15px"
        height="322px"
        p="1rem"
        justifyContent="center"
        align="center"
        role="group"
        overflow="hidden"
        transition="all .5s ease"
        _hover={{ bgColor: 'brand.300' }}
      >
        <Box>
          <Square
            size="70px"
            mx="auto"
            bg="brand.400"
            color="brand.100"
            mb={4}
            borderRadius="5px"
            position="relative"
            top="30px"
            transition="all .5s ease"
            _groupHover={{ top: '0px', bg: 'white' }}
          >
            <Icon as={icon} fontSize="2rem" />
          </Square>
          <VStack textAlign="center">
            <Text
              fontSize="1.1rem"
              color="brand.300"
              position="relative"
              top="120px"
              textTransform="capitalize"
              transition="all .5s ease"
              _groupHover={{ color: 'white', top: '0px' }}
            >
              {title}
            </Text>
            <Text
              fontSize=".7rem"
              color="white"
              position="relative"
              my="1rem !important"
              bottom="-170px"
              transition="all .5s ease"
              _groupHover={{ bottom: '0' }}
            >
              {note}
            </Text>
            <NextLink href={`/getstarted/${link}`} passHref>
              <Link
                color="white"
                fontSize=".8rem"
                display="flex"
                alignItems="center"
                position="relative"
                top="70px"
                transition="all .5s ease"
                _groupHover={{ color: 'white', top: '0px' }}
              >
                <Text>Get Started</Text>
                <FiArrowUpRight />
              </Link>
            </NextLink>
          </VStack>
        </Box>
      </Flex>
    </GridItem>
  );
}

export default Cards;
