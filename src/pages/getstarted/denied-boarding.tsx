import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import Fifth from 'lib/components/sections/getStarted/Fifth';
import First from 'lib/components/sections/getStarted/First';
import Fourth from 'lib/components/sections/getStarted/Fourth';
import SideNav from 'lib/components/sections/getStarted/SideNav';
import Third from 'lib/components/sections/getStarted/Third';
import FormButton from 'lib/components/Utilities/FormButton';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ComplaintsModel } from 'types/api';
import { useOperationMethod } from 'react-openapi-client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToasts } from 'react-toast-notifications';
import Denied from 'lib/components/sections/getStarted/Denied';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
  departureLocation: yup.string().required('Departure Location is required'),
  finalDestination: yup.string().required('Final Destination is required'),
  departureDate: yup.string().required('Departure Date is required'),
  connectingFlights: yup.string().required('Connecting Flights is required'),
  arrivalTime: yup.string().required('Arival Time is required'),
  boardingPass: yup.string().required('Boarding Pass is required'),
  additionalInformation: yup
    .string()
    .required('Additional Information is required'),
});
function GetStarted() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [value, setValue] = useState<any>(false);
  const [url, setUrl] = useState<string>();
  const setUrlString = (url: string) => {
    setUrl(url);
  };
  const [registerComplain, { data, loading, error }] =
    useOperationMethod('Complaintscreate');
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { addToast } = useToasts();
  const id = 3;

  const isUser = Cookies.get('user');
  useEffect(() => {
    if (isUser !== 'true') {
      router.push({ pathname: '/auth', query: { from: router.pathname } });
      return;
    }
  });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm<ComplaintsModel>({
    resolver: yupResolver(schema),
    defaultValues: {
      complaintsCategoryId: id as unknown as number,
    },
    mode: 'all',
  });

  const onSubmit = async (data: ComplaintsModel) => {
    data.connectingFlights = data.connectingFlights as boolean;
    data.mandateFormReference = url;
    data.departureDate = new Date(
      data.departureDate as unknown as Date
    ).toLocaleDateString();
    
    let value;
    try {
      const result = await registerComplain(undefined, data);
      const value = result.data;
      if (value.status) {
        addToast('Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        setValue(result.status);
        return;
      }
      addToast(value.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>
          Get Started |{' '}
          {router.asPath.replace(/getstarted|-/gi, ' ').replace('/ /', '')}
        </title>
      </Head>
      <Flex align="flex-start" minH={['35rem', '70rem']} pos="relative">
        <SideNav step={step} isValid={isValid} />
        <Box w={['100%', '70%']} ml="auto">
          <VStack
            mt={step === 0 ? '2rem' : step === 2 ? '3.5rem' : '2rem'}
            mx={['0', '3rem']}
          >
            <Text
              fontSize={['1.1rem', '2rem']}
              color={step === 0 ? 'brand.200' : 'brand.100'}
              textAlign="center"
              w={['85%', '90%']}
            >
              {step === 0
                ? `Hi! Let's help you get compensation for your ${router.asPath
                    .replace(/getstarted|-/gi, ' ')
                    .replace('/ /', '')
                    .slice(0, -1)}`
                : step === 2
                ? 'Mandate form'
                : ''}
            </Text>

            <Box w="100%" mx="auto">
              <form
                onSubmit={handleSubmit(onSubmit, (errors) =>
                  console.log(errors)
                )}
              >
                {step === 0 && <First register={register} errors={errors} />}
                {step === 1 && (
                  <Denied
                    register={register}
                    errors={errors}
                    control={control}
                  />
                )}
                {step === 2 && <Third />}
                {step === 3 && (
                  <Fourth
                    canSubmit={canSubmit}
                    setCanSubmit={setCanSubmit}
                    setUploadedUrl={setUrlString}
                  />
                )}
                {step === 4 && value ? (
                  <Fifth />
                ) : step != 4 ? (
                  ''
                ) : (
                  'Please wait'
                )}
                <FormButton
                  step={step}
                  setStep={setStep}
                  isValid={isValid}
                  loading={loading}
                  canSubmit={canSubmit}
                />
              </form>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default GetStarted;
