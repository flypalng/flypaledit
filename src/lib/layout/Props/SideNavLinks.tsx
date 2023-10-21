import { Text } from '@chakra-ui/react';
import { number } from 'yup';

type SideNav = {
  steps: number;
  name: string;
  step: number;
  isValid: boolean;
};

function SideNavLinks({ steps, name, step, isValid }: SideNav) {
  let num = steps + 1;

  return (
    <Text
      fontSize="1.3rem"
      color={step >= steps ? 'brand.500' : 'white'}
      pos="relative"
      w="260px"
      _after={{
        content:
          (isValid && step > steps && steps != 0) || step == 4 || steps === 0
            ? 'url(/assets/check.png)'
            : '""',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        w: '23px',
        h: '23px',
        pos: 'absolute',
        borderRadius: '50%',
        fontWeight: '900',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        border:
          (isValid && step >= steps && isValid && step != steps) ||
          (step == 4 && num === 5) ||
          steps === 0
            ? ''
            : step === steps && num >= 1
            ? '5px solid #FCC13F'
            : '5px solid white',
      }}
      _before={{
        content: '""',
        w: '70px',
        pos: 'absolute',
        border:
          (isValid && step >= steps && steps < 4) || steps === 0
            ? '3px solid #FCC13F'
            : (step >= 4 && num >= 4) || steps >= 4
            ? ''
            : '3px solid white',
        transform: 'rotate(-90deg)',
        right: '-24px',
        top: '173%',
      }}
    >
      {name}
    </Text>
  );
}

export default SideNavLinks;
