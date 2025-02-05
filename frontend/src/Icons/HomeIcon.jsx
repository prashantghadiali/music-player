import { Box, Icon, useToken } from '@chakra-ui/react';

const HomeIcon = (props) => {
  const [gradientColor1, gradientColor2] = useToken('colors', ['#FF5353', '#E91E1E']); // Use Chakra UI token for colors

  return (
    <Icon viewBox="0 0 27 25" {...props}>
      <Box as="svg" width="100%" height="100%" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.8052 12.5432L14.1401 0.886513C14.0561 0.802356 13.9563 0.73559 13.8465 0.690035C13.7366 0.644481 13.6189 0.621033 13.5 0.621033C13.3811 0.621033 13.2634 0.644481 13.1536 0.690035C13.0437 0.73559 12.944 0.802356 12.86 0.886513L1.19484 12.5432C0.854993 12.883 0.662415 13.3446 0.662415 13.8261C0.662415 14.8258 1.47521 15.6386 2.47491 15.6386H3.70402V23.9562C3.70402 24.4575 4.109 24.8625 4.61027 24.8625H11.6875V18.5187H14.8594V24.8625H22.3898C22.891 24.8625 23.296 24.4575 23.296 23.9562V15.6386H24.5251C25.0066 15.6386 25.4682 15.4488 25.808 15.1061C26.5132 14.3981 26.5132 13.2512 25.8052 12.5432Z" fill={`url(#gradient)`} />
        <defs>
          <linearGradient id="gradient" x1="13.4995" y1="0.621033" x2="33.5687" y2="14.0717" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradientColor1} />
            <stop offset="1" stopColor={gradientColor2} />
          </linearGradient>
        </defs>
      </Box>
    </Icon>
  );
};

export default HomeIcon;