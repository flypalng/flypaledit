import {
  Box,
  Button,
  Circle,
  color,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import shadeColor from 'lib/components/Utilities/Functions/ColorShade';
import { FaUser } from 'react-icons/fa';

function UserInfo({ display, item }: { display: string; item?: any }) {

  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Flex align={['center', 'flex-start']} flexDirection={['column', 'row']}>
        <Box w={['100%', '60%']} as="div">
          <HStack spacing="3rem" flexDirection={['column', 'row']}>
            <Circle
              size="120px"
              overflow="hidden"
              bg={shadeColor('#007F82', 0.1)}
              alignItems="flex-end"
              mb={['1rem', 0]}
            >
              <Icon as={FaUser} color="brand.100" fontSize="90px" />
            </Circle>
            <HStack
              align={['center', 'flex-start']}
              spacing="3rem"
              mx={['0 !important', '3rem !important']}
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align={['center', 'flex-start']} spacing={1}>
                <Text fontWeight="700" fontSize="1rem">
                  Personal information
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.fullName}
                </Text>
                <Text
                  fontWeight="400"
                  fontSize=".9rem"
                  color="brand.200"
                  textAlign={['center', 'left']}
                >
                  {item.email}
                </Text>
              </VStack>
              <VStack
                as="div"
                align={['center', 'flex-start']}
                spacing={1}
                display={display}
                marginInlineStart={['0 !important', '3rem !important']}
              >
                <Text fontWeight="700" fontSize="1rem">
                  Complaints
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  Cancelled flight
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </Box>
        <Box w={['full', '40%']} as="div" display={display}>
          <HStack spacing="1.8rem" mt="1.5rem" w="80%" mx="auto">
            <Button variant="outline" borderColor="brand.100">
              Resolve
            </Button>
            <Button
              variant="outline"
              borderColor="red"
              color="red"
              _hover={{ color: 'white', bgColor: 'red' }}
            >
              Resolve
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserInfo;
