import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}
export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jonathan Lopes</Text>
          <Text color="gray.300" fontSize="small">
            jonathanlopes@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Jonathan Lopes" />
    </Flex>
  )
}
