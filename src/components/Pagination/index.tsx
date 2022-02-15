import { Box, HStack, Text } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export const Pagination = ({ totalCountOfRegisters, registerPerPage = 10, currentPage = 1, onPageChange }: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage)

  const previousPage = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

  const nextPage = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 && previousPage.map((page) => <PaginationItem onPageChange={onPageChange} key={page} number={page} />)}
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        {nextPage.length > 0 && nextPage.map((page) => <PaginationItem onPageChange={onPageChange} key={page} number={page} />)}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </HStack>
    </HStack>
  )
}
