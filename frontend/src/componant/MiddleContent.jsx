import { Avatar, Box, Flex, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, WrapItem } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react'

const MiddleContent = () => {
    return (
        <div>
            <Flex alignItems="center">
                <Box w={'100%'}>
                    <SimpleGrid minChildWidth='20px' columns={1} spacing='10px'>
                        <Box height='20px' >Music</Box>
                        <Box height='20px' >Podcast</Box>
                        <Box height='20px' >Live</Box>
                        <Box height='20px'>Radio</Box>
                    </SimpleGrid>
                </Box>
                <Spacer />
                <Box p='2'>
                    <InputGroup >
                        <InputRightElement
                            pointerEvents="none"
                            borderRadius={'7vh'}
                            paddingRight={5}
                            children={<AiOutlineSearch />}
                        />
                        <Input type='search' width={400} borderRadius="5vh" placeholder="Search" />
                    </InputGroup>
                </Box>
            </Flex>
            <Flex>
                <Box p='4' h={36} >
                    <Text fontSize={'large'}>Popular</Text>
                </Box>
                <Spacer />
                <Box p='4' h={27} >
                    <Text fontSize={'medium'}>See All</Text>
                </Box>
            </Flex>
            <TableContainer>
                <Table >
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>TITLE</Th>
                            <Th>PLAYING</Th>
                            <Th>TIME</Th>
                            <Th>ALBUM</Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        <Tr className="hover-row" _hover={{ bg: 'red.500' }}>
                            <Td>1</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                        <Tr>
                            <Td>1</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                        <Tr>
                            <Td>4</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                        <Tr>
                            <Td>5</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                        <Tr>
                            <Td>6</Td>
                            <Td><Flex><WrapItem>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </WrapItem> <Text mt={2} ml={4}>Billie Jean </Text></Flex> </Td>
                            <Td isNumeric>643.786.045</Td>
                            <Td isNumeric>4:18</Td>
                            <Td>Thriller 25 Sup...</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <style jsx>{`
                .hover-row:hover {
                    background-color: red !important;
                }
            `}</style>
        </div>
    )
}

export default MiddleContent
