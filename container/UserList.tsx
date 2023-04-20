import { useGetUsersQuery } from '../app/api/userApi'
import { userAction } from '../app/slice/userSlice'
import { formAction } from '../app/slice/formSlice'
import { useDisclosure } from '@chakra-ui/react'
import { useAppDispatch } from '../app/hook'
import { memo, useCallback } from 'react'
import BackdropModal from './Modal'
import UserItem from './UserItem'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const UserList = () => {
    const { isLoading, data } = useGetUsersQuery()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useAppDispatch()

    const deleteHandler = useCallback((Id: string) => {
        dispatch(userAction.deleteId(Id))
        onOpen()
    }, [dispatch, onOpen])

    const updateHandler = useCallback((Id: string) => {
        dispatch(formAction.showForm())
        dispatch(formAction.enableEditMode())
        const userSelectUpdate = data?.find(user => {
            return user._id === Id
        })
        if (userSelectUpdate) dispatch(userAction.userUpdateInfo(userSelectUpdate))
    }, [data, dispatch])

    if (isLoading) return <h2>is Loading...</h2>

    return (
        <>
            <BackdropModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <TableContainer width="100%" marginY={4} borderY="1px solid #c9c9c9">
                <Table variant='striped' colorScheme="blackAlpha" size="lg">
                    <TableCaption placement="top">Simple user management</TableCaption>
                    <Thead>
                        <Tr backgroundColor="blackAlpha.800">
                            <Th color="white">First name</Th>
                            <Th color="white">Last name</Th>
                            <Th color="white">Email</Th>
                            <Th color="white" isNumeric>Salary</Th>
                            <Th color="white">status</Th>
                            <Th color="white">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map(user => (
                            <UserItem
                                key={user._id}
                                {...user}
                                onDelete={deleteHandler}
                                onUpdate={updateHandler} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default memo(UserList)