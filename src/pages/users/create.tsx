import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { Header, Input, Sidebar } from "../../components"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useMutation } from "react-query"
import { api } from "../../services/api"
import { queryClient } from "../../services/queryClient"
import { useRouter } from "next/router"

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, "Mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Senhas precisam ser iguais"),
})

export default function CreateUser() {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post("/users", {
      user: {
        ...user,
        created_at: new Date(),
      },
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="¨6">
        <Sidebar />

        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome Completo" {...register("name")} error={errors.name} />
              <Input name="email" label="Email" type="email" {...register("email")} error={errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" label="Senha" type="password" {...register("password")} error={errors.password} />
              <Input
                name="password_confirmation"
                label="Confirme a senha"
                type="password"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button type="submit" isLoading={isSubmitting} colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
