import {
  Avatar,
  Flex,
  Menu,
  Image,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Logo from '../assets/react.svg'

export const Header = () => {

  return (
    <Flex
      px="2%"
      py="1%"
      justify={"space-between"}
      bgColor={"#F7F7FA"}
      color={"#000"}
      align="center"
      borderBottom={"1px solid rgba(0,0,0,0.2)"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Image src={Logo} alt={"Company Logo"}/>
        <Text>DevTest</Text>
      </Flex>
      <Flex align={"center"} gap={4}>
        <Text className={"uppercase font-medium"}>
          Sebastião Moniz
        </Text>
        <Menu>
          <MenuButton
            as={Avatar}
            name={"Sebastião Moniz"}
            src={"https://github.com/Cientista-Avogadro.png"}
            cursor={"pointer"}
            display="grid"

          />
          <MenuList shadow={"lg"}>
            <MenuGroup>
              <MenuItem
                _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                _focus={{ backgroundColor: "" }}
              >
                Perfil
              </MenuItem>
              <MenuItem
                _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                _focus={{ backgroundColor: "" }}
              >
                Sair
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
