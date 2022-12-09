import React from 'react'
import { useForm } from 'react-hook-form'

const FormUser = ({createNewUser}) => {

const {register, reset, handleSubmit} = useForm()

    const submit=(data)=>{
        createNewUser(data)

        reset({
            email:"",
            first_name:"",
            last_name:"",
            brithday:"",
            password:""
        }

        )
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Creat</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")}/>
        </div>
        <div>
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" {...register("first_name")}/>
        </div>
        <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" {...register("last_name")}/>
        </div>
        <div>
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" {...register("birthday")}/>
        </div>
        <button onClick={handleSubmit()}>Submit</button>

    </form>
  )
}

export default FormUser