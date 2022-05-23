import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

const CreatePost = () => {
  const navigate = useNavigate()
  return (
    <Button
      variant='outlined'
      size='medium'
      onClick={() => navigate('/posts/create')}
      sx={{
        gap: '0.5rem',
        minWidth: '150px',
        whiteSpace: 'nowrap',
      }}
    >
      <AiOutlinePlus style={{ flexShrink: 0 }} />
      <span>Create Post</span>
    </Button>
  )
}

export default CreatePost
