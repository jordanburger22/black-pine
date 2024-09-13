import React, { useState } from 'react';



export const useForm = (initValue, submitFunc, isEdit=false) => {

    const [formState, setFormState] = useState(initValue);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const resetForm = () => {
        setFormState(initValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        submitFunc();
        !isEdit && resetForm();

    }

    return {
        formState,
        handleChange,
        handleSubmit,
        resetForm,
        setFormState
    }
}