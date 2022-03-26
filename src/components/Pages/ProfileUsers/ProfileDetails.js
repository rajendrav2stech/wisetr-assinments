import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiBuildings, BiDownload, BiEnvelope, BiGlobe, BiLeftArrowAlt, BiMap, BiPhoneCall } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetilsUser } from '../../../actions/users'
import Spinner from '../../Spinner/Spinner'

const ProfileDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { users, isLoading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getDetilsUser(id))
    }, [id])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='go_back'> <Link to={`/`}> <BiLeftArrowAlt /> Go Back</Link></div>
                </Col>
                <Col lg={3} md={3} sm={12} xs={12}>
                    <div className='card profile_card detilss d-flex'>
                        <div className='left_side'>
                            <div className='bg_gray'>
                                <img src={`https://avatars.dicebear.com/v2/avataaars/${users.username}.svg`} alt="" />
                            </div>
                            <div className="detils">
                                <h4>{users.name}</h4>
                                <h5><BiEnvelope /> {users.email}</h5>
                                <h5><BiPhoneCall />{users.phone} </h5>
                                <h5><BiGlobe />{users.website} </h5>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col lg={9} md={9} sm={12} xs={12}>
                    <div className="detils_right">
                        <h4><BiMap /> Address</h4>
                        <ul>
                            <li>{users?.address?.street}</li>
                            <li>{users?.address?.suite}</li>
                            <li>{users?.address?.city}</li>
                            <li>{users?.address?.zipcode}</li>
                        </ul>
                        <h4><BiBuildings /> Company Detils</h4>
                        <ul>
                            <li>{users?.company?.name}</li>
                            <li>{users?.company?.catchPhrase}</li>
                            <li>{users?.company?.bs}</li>
                        </ul>
                    </div>
                    <div className='header_contact'>
                        <a className='blg' href="#"> Download Cv</a>
                        <a href="#">Contact Me</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileDetails