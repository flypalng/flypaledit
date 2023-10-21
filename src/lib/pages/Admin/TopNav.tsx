import {
  Text,
  Circle,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Parameters } from 'openapi-client-axios';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useOperationMethod } from 'react-openapi-client';
import { UserView } from 'types/api';
import listenForOutsideClick from '../../layout/Props/OnclickOutside';

export default function TopNav() {
  const router = useRouter();
  const checkAdmin = Cookies.get('adminData') as unknown as string;
  let admin;
  if (checkAdmin !== undefined) {
    admin = JSON.parse(checkAdmin);
  }
  console.log({ admin });

  const [searchUser, { data, loading, error }] =
    useOperationMethod('Usersearch{search}');

  const [searchResult, setSearchResult] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef(null);
  const [listening, setListening] = useState(false);

  useEffect(
    listenForOutsideClick(listening, setListening, searchRef, setIsSearchOpen)
  );

  const userSearch = async (search: string) => {
    const params: Parameters = {
      search,
    };
    try {
      const result = (await searchUser(params)).data;
      console.log({ search });
      const newSearch = result.data.filter((value: any) => {
        return value.fullName.toLowerCase().includes(search.toLowerCase());
      });
      if (search === '') {
        setSearchResult([]);
      } else {
        setSearchResult(newSearch);
        setIsSearchOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      align="center"
      h="6rem"
      bg="transparent"
      display={router.pathname === '/admin/settings' ? 'none' : 'flex'}
    >
      <Box as="div" w={['40%', '60%']} pos="relative" ref={searchRef}>
        <InputGroup w="100" role="group">
          <Input
            placeholder="Searching"
            type="search"
            borderRadius="8px"
            border="1px solid rgba(0, 0, 0, 0.04)"
            bgColor="#DFF8F9"
            height="42px"
            _placeholder={{ color: '#059C9F' }}
            onChange={(e) => userSearch(e.target.value)}
          />
          <InputRightElement
            h="42px"
            w="42px"
            children={<AiOutlineSearch color="rgba(0, 0, 0, 0.04)" />}
          />
        </InputGroup>
        {searchResult.length !== 0 && (
          <Box
            bgColor="white"
            py={searchResult ? '2rem' : '0'}
            px="2rem"
            pos="absolute"
            w="full"
            zIndex={5}
            display={isSearchOpen ? 'block' : 'none'}
          >
            {searchResult.map((x: UserView) => {
              return (
                <Link href={'/admin/users/' + x.id} key={x.id} passHref>
                  <Flex
                    align="center"
                    justify="space-between"
                    mb="1rem"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <Box cursor="pointer">
                      <Text fontWeight="500" color="brand.200">
                        {x.fullName}
                      </Text>
                      <Text fontSize=".6rem">{x.email}</Text>
                    </Box>
                    {/* <Text fontSize=".6rem">{`/users/${x.id}`}</Text> */}
                  </Flex>
                </Link>
              );
            })}
          </Box>
        )}
      </Box>

      <Flex
        align="center"
        w={['58%', '40%']}
        justify={['flex-start', 'flex-end']}
        flexDirection={['row-reverse', 'row']}
      >
        <Circle size="50px" overflow="hidden" bg="gray">
          <Image
            src={admin ? admin.profilePhotoReference : '/assets/whoarewe.png'}
            w="full"
            h="full"
            objectFit="cover"
          />
        </Circle>
        <Text
          fontWeight="600"
          fontSize="1rem"
          pl={['0', '.8rem']}
          pr={['.8rem', '0rem']}
        >
          {`Hi, ${admin ? admin.firstName : ''}`}
        </Text>
      </Flex>
    </Flex>
  );
}
