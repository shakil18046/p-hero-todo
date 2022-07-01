import React from 'react';
import { useForm } from 'react-hook-form';
import {toast } from 'react-toastify';

const Todo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/list",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        console.log(data);

        toast.success("Wow successfully added!");
    }
    return (
        <div className='py-10'>
            <h2 className='text-2xl font-bold text-center uppercase pb-7'>Add your daily task</h2>
            <form className='w-2/4 mx-auto'  onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" className='input w-full border border-current h-15 mb-5' {...register("example")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                {/* <input className='input w-full border border-current mb-5' {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
                <input  className='btn' type="submit" />
            </form>
        </div>
    );
};

export default Todo;