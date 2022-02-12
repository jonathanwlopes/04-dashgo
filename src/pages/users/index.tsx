import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header, Pagination, Sidebar } from "../../components"

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="¨6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button as="a" size="sm" fontSize="small" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jonathan Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      jonathan@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de Fevereiro, 2022</Td>
                <Td>
                  {" "}
                  <Button as="a" size="sm" fontSize="small" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jonathan Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      jonathan@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de Fevereiro, 2022</Td>
                <Td>
                  {" "}
                  <Button as="a" size="sm" fontSize="small" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jonathan Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      jonathan@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de Fevereiro, 2022</Td>
                <Td>
                  {" "}
                  <Button as="a" size="sm" fontSize="small" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}