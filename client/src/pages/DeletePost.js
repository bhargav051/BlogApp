import {useState} from "react";
import {Navigate, useParams} from "react-router-dom";

const DeletePost = () => {

    const [redirect, setRedirect] = useState(false);
    const {id} = useParams();

    const deletePost = async (e) => {
        const response = await fetch('http://localhost:4000/delete/'+id,{
            method: 'DELETE',
        });
        if(response.ok){
            setRedirect(true);
        }
    }

    const returnTo = async () => {
        window.history.back();
    }

    if(redirect){
        return < Navigate to = {'/'} />
    }

    return (
        <>
            <h3> Do you want to delete this post</h3>
            <button className='confirm-btn' onClick={deletePost}>Yes</button>
            <button className='confirm-btn' onClick={returnTo}>No</button>
        </>
    )
}

export default DeletePost;