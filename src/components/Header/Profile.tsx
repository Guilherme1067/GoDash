import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Reis</Text>
        <Text color="gray.300" fontSize="small">
          guilherme1067@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Guilherme Reis"
        src="https://github.com/guilherme1067.png"
      />
    </Flex>
  );
}
