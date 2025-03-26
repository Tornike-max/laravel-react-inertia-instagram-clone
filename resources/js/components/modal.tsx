import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Avatar } from '@mui/material';
import { useForm } from '@inertiajs/react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#1c1c1c',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const ModalComponent = ({open,handleClose}:{open:boolean,handleClose:()=>void}) => {
    const {post,processing,data,errors,setData} = useForm({
        content:"",
        title:''
    });

    const onSubmit = ()=>{
        post(route('posts.store'));
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open} className='rounded-md bg-neutral-900'>
                <Box sx={style} >
                    <div className='w-full flex justify-center items-center flex-col gap-6'>
                        <div className='w-full flex justify-start items-center gap-3'>
                            <Avatar className='w-5'>H</Avatar>
                            <div className='flex items-start justify-center flex-col'>
                                <span className='text-sm text-white'>Tornike Ozbetelashvili</span>
                                <button className='p-[3px] rounded-md bg-neutral-400'>
                                    <span className='text-white'>Friends</span>
                                </button>
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className='w-full flex justify-center items-center flex-col gap-4'>
                            <input value={data.title} onChange={(e)=>setData('title',e.target.value)} className='w-full text-white p-2' placeholder="What's on your mind?" />
                            <textarea onChange={(e)=>setData('content',e.target.value)} className='w-full text-white p-2' placeholder="What's on your mind?">{data.content}</textarea>
                            {errors.content && <span className='text-red-500'>{errors.content}</span>}
                            <button disabled={processing} className='w-full py-2 px-3 rounded-lg bg-blue-500 text-slate-200 hover:text-slate-100'>{processing ? 'Processing' : 'Post'}</button>
                        </form>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalComponent