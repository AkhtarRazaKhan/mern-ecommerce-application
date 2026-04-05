import Button from '@mui/material/Button';
import React from 'react'
import TextField from '@mui/material/TextField';
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar';

const MyAccount = () => {
  return (
    <section className='w-full py-10'>
        <div className='container flex gap-5'>
            

            <div className='col1 w-[15%]'>
                {/* Component */}
            <AccountSidebar/>
            </div>

            <div className='col2 w-[60%]'>
                <div className='card bg-white p-5 shadow-md rounded-md'>
                    <h2 className='pb-3 border-b border-[rgba(0,0,0,0.1)]'> My Profile</h2>
            

                <form className='mt-5 mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[50%]'>
                            <TextField
                            label="Full Name"
                            variant='outlined'
                            size='small'
                            className='w-full'
                            />
                        </div>

                         <div className='w-[50%]'>
                            <TextField
                            label="Email"
                            variant='outlined'
                            size='small'
                            className='w-full'
                            />
                        </div>
                        

                    </div>

                    <br/>

                    <div className='flex items-center gap-4'>
                        <Button className='btn-org btn-lg w-[100px]'> Save </Button>
                        <Button className='btn-org btn-lg btn-border w-[100px]'> Cancel </Button>

                    </div>

                </form>

                </div>

            </div>

        </div>
    
     
    </section>
  )
}

export default MyAccount
