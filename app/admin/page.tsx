'use client'
import { useState } from 'react'

const Admin = () => {
  const [name, setName] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')

  return (
    <>
      <h1>the admin page</h1>
      <form>
        <div>
          <label htmlFor='name'>name
            <input
              id='name'
              value={name}
              type='text'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='category'>category
            <input
              id='category'
              value={category}
              type='text'
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='file'>
            <input
              id='file'
              type='file'
              required
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>
        <button
          type='submit'
          disabled={status === 'uploading'}
        >
          {status === 'uploading' ? 'uploading...' : 'upload & save'}
        </button>
      </form>
    </>
  )
}

export default Admin 
