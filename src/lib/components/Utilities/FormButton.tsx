import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import { saveAs } from 'file-saver';

function FormButton({
  step,
  setStep,
  isValid,
  loading,
  canSubmit,
}: {
  step: number;
  setStep: any;
  loading: any;
  isValid: boolean;
  canSubmit: boolean;
}) {
  const handleProceed = () => {
    setStep((cur: number) => cur + 1);
  };
  const saveFile = () => {
    saveAs('/assets/dummy.pdf', 'mandate.pdf');
    setStep(3);
  };
  // console.log(canSubmit);

  return (
    <Box
      w={[step === 2 ? '90%' : '100%', step === 2 ? '90%' : '70%']}
      mx="auto"
    >
      <Flex
        w="full"
        mt="2rem"
        mb="4rem"
        align="center"
        display={step >= 4 ? 'none' : 'flex'}
        justifyContent="flex-end"
      >
        <Text
          ml="auto"
          fontSize="1.1rem"
          fontWeight="600"
          color="brand.100"
          cursor="pointer"
          display={step === 0 || step === 1 ? 'none' : 'block'}
          onClick={() => setStep(step - 1)}
        >
          Back
        </Text>
        <Button
          variant="solid"
          ml={'3rem'}
          mr={['auto', '0']}
          type={step === 4 ? 'submit' : 'button'}
          disabled={
            step == 1 ? !isValid : canSubmit || step === 2 ? false : true
          }
          onClick={step === 2 ? saveFile : handleProceed}
          isLoading={loading}
        >
          {step === 3 ? 'Submit' : step === 2 ? 'Download' : 'Proceed'}
        </Button>
      </Flex>
    </Box>
  );
}

export default FormButton;
