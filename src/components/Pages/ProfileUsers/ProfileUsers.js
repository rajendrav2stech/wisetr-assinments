import React from 'react'
import { useSelector } from 'react-redux'
import Profile from './Profile'
import Spinner from '../../Spinner/Spinner'
import { Container, Row } from 'react-bootstrap'

const ProfileUsers = () => {
    const { isLoading, users } = useSelector((state) => state.users)
    return (
        <Container>
            <Row>
                {
                    isLoading ? <Spinner /> : users?.map((user) => {
                        return <Profile key={user.id} user={user} />
                    })
                }
            </Row>
        </Container>
    )
}

export default ProfileUsers