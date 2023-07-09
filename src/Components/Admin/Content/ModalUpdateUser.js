import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';
import { putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';
const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;


    const handleClose = () => {
        setShow(false)
        setUsername("");
        setPassword("");
        setRole('USER');
        setimage("");
        setpreviewimage("");
        props.resetUpdateData();
    };

    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setimage] = useState("");
    const [previewimage, setpreviewimage] = useState("");

    useEffect(() => {
        console.log('run update', dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setPassword(dataUpdate.password);
            setRole(dataUpdate.role);
            setimage("");
            if (dataUpdate.image) {
                setpreviewimage(`data:image/ipeg;base64,${dataUpdate.image}`);
            }

        }

    }, [dataUpdate])
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setpreviewimage(URL.createObjectURL(event.target.files[0]))
            setimage(event.target.files[0])
        } else {

        }


    }

    const handleSubmitCreateUser = async () => {
        if (!password) {
            toast.error('Chưa nhập password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        let data = await putUpdateUser(dataUpdate.id, password, username, role, image);
        if (data && data.EC === 0) {
            toast.success(' Add Success', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            handleClose();
            await props.fetchListUsers();
        }
        if (data && data.EC !== 0) {
            toast.error(' Add Error', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    console.log('check update:', props.dataUpdate)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button> */}

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static"
                className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                                <option selected value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus />Upload File Image
                            </label>
                            <input type="file" hidden id='labelUpload'
                                onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewimage ?
                                <img src={previewimage} />
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
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}
export default ModalUpdateUser;