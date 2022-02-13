import { Flex, Icon, IconButton, useMediaQuery } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSideBarDrawer } from "../../context/SideBarDrawerContext"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export const Header = () => {
  const { onOpen } = useSideBarDrawer()

  const [isWideVersion] = useMediaQuery("(max-width: 1200px)")

  return (
    <Flex as="header" w="100%" maxW={1480} h="20" mx="auto" mt="4" align="center">
      {!!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label="Open Navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={!isWideVersion} />
      </Flex>
    </Flex>
  )
}
