import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUsers } from '../../../services/apiService';
import { toast } from 'react-toastify';
const ModalDeleteUser = (props) => {

    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDeleteUser = async () => {
        let data = await deleteUsers(dataDelete.id);
        if (data && data.EC === 0) {
            toast.success(' Delete Success', {
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
            props.setCurrentPage(1);
            await props.fetchListUserswithPaginate(1);
        }
        if (data && data.EC !== 0) {
            toast.error(' Delete Error', {
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

    return (
        <>


            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa người dùng ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn chắc chắn muốn xóa người dùng {dataDelete && dataDelete.email ? dataDelete.email : ""}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDeleteUser() }}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalDeleteUser;