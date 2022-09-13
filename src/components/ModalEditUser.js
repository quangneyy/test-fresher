import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postCreateUser } from '../services/UserService'; 
import { toast } from 'react-toastify'

const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleEditUser = () => {

    }

    useEffect(() => {
        if(show){
            setName(dataUserEdit.first_name);
        }
    }, [dataUserEdit])

    console.log("check props: ", dataUserEdit);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div class="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                type="text" 
                                class="form-control"
                                value={name} 
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Job</label>
                            <input 
                                type="text" 
                                class="form-control"
                                value={job} 
                                onChange={(event) => setJob(event.target.value)} 
                            />
                        </div>
                        {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditUser;