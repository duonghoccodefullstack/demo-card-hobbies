import { useState } from 'react'

import './App.css'
// import { Button } from './components/ui/button'
import { Button } from "@/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function App() {
 

  return (
    <>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      <div className=''>
      <Button variant="secondary">Secondary</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
