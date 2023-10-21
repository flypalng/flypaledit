import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import shadeColor from 'lib/components/Utilities/Functions/ColorShade';
import { useRouter } from 'next/router';
import { FaUser } from 'react-icons/fa';
import { Parameters } from 'openapi-client-axios';
import { useToasts } from 'react-toast-notifications';
import { useOperationMethod } from 'react-openapi-client';
import DeclineButton from './DeclineButton';

function UserInfoWithComplain({
  display,
  item,
}: {
  display: string;
  item?: any;
}) {
  const userItem = item.user;

  const router = useRouter();
  const { addToast } = useToasts();
  const [resolveComplaint, { data, loading, error }] = useOperationMethod(
    'Admincomplaintsresolve{id}'
  );

  const approveComplaints = async () => {
    const params: Parameters = {
      id: item.id,
    };
    try {
      const data = await (await resolveComplaint(params)).data;
      if (data.status) {
        addToast('Complaint Resolved', {
          appearance: 'success',
          autoDismiss: true,
        });
        window.location.reload();
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  {userItem.fullName}
                </Text>
                <Text
                  fontWeight="400"
                  fontSize=".9rem"
                  color="brand.200"
                  textAlign={['center', 'left']}
                >
                  {userItem.email}
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
                  {item.complaintsCategory}
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </Box>
        <Box w={['full', '40%']} as="div" display={display}>
          <HStack spacing="1.8rem" mt="1.5rem" w="80%" mx="auto">
            <Button
              variant="outline"
              borderColor="brand.100"
              isLoading={loading}
              onClick={() => approveComplaints()}
              disabled={item.status == 'PENDING' ? false : true}
            >
              Resolve
            </Button>
            <DeclineButton item={item} />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserInfoWithComplain;
