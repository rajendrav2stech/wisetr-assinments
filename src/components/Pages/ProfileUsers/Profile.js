import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import { BiEditAlt, BiEnvelope, BiGlobe, BiHeart, BiPhoneCall, BiTrashAlt } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../../actions/users';
import UserForm from './Form';


const Profile = ({ user }) => {
    const [curentId, setCurentId] = useState(null)
    const [like, setLike] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const { handleCloseEdit } = () => setShow(false)

    const editHandler = () => {
        setCurentId(user.id)
        setShow(true)
    }
    const closeButton = () => {
        setShow(false)
    }
    const deleteHandler = () => {
        if (window.confirm(`Are you sure you want to delete? ${user.name} Profile`)) {
            dispatch(deleteUser(user.id))
        }
    }
    const likeHandel = () => {
        if (like) {
            setLike(false)
        } else {
            setLike(true)
        }
    }

    const onDetailsPage = () => {
        navigate(`/users/${user.id}`)
    }

    return (
        <>
            <Col lg={3} md={3} sm={12} xs={12}>
                <div className='card profile_card'>
                    <div className='bg_gray'>
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`} alt="" />
                    </div>
                    <div className="detils">
                        <h4 onClick={onDetailsPage}>{user.name}</h4>
                        <h5><BiEnvelope /> {user.email}</h5>
                        <h5><BiPhoneCall />{user.phone} </h5>
                        <h5><BiGlobe />{user.website} </h5>
                    </div>
                    <div className="action">
                        <ul className='d-flex align-items-center justify-content-between'>
                            <li><BiHeart className={like ? 'like' : 'unlike'} onClick={likeHandel} /></li>
                            <li><BiEditAlt onClick={editHandler} /></li>
                            <li><BiTrashAlt onClick={deleteHandler} /></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Modal show={show} onHide={handleCloseEdit} className="edit_handel">
                <Modal.Header >
                    <Modal.Title> <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`} alt="" /> {user.name}</Modal.Title>
                    <button type="button" onClick={closeButton} className="btn-close" aria-label="Close"></button>
                </Modal.Header>
                <Modal.Body>
                    <UserForm curentId={curentId} setShow={setShow} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Profile