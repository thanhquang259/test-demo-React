import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import _ from 'lodash';
const ModalViewUser = (props) => {
    const { show, setShow, dataView } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props.dataView)

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static"
                className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>View user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"
                                value={dataView.email}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                value={dataView.password}
                                className="form-control"
                                disabled />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                value={dataView.username}
                                className="form-control"
                                disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                value={dataView.role}
                                className="form-select"
                                disabled
                            >
                                <option selected value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label
                                value={dataView.image}
                                className="form-label label-upload"
                                htmlFor='labelUpload'>
                                <FcPlus />Upload File Image
                            </label>
                            <input type="file" hidden id='labelUpload'
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {dataView.image ?
                                <img src={`data:image/ipeg;base64,${dataView.image}`} />
                                :
                                < span > Preview Image</span>

                            }


                        </div>



                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal >
        </>
    );

}
export default ModalViewUser;