import {Box, Container} from "@chakra-ui/react";

export const Content = ({ children }: any) => {
  
  return (
    <Box
      bgColor={"#fff"}
      overflowY={"scroll"}
      color={"#000"}
      overflowX={"hidden"}
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#11101d",
          borderRadius: "24px",
        },
      }}
      position={"relative"}
      className={"w-100"}
    >
        <Container maxW='4xl'>
            {children}
        </Container>

    </Box>
  );
};
