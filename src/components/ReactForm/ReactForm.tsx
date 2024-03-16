import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './ReactForm.module.css';

const ReactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className={styles.reactForm} onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>ReactHookForm</div>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          {...register('age')}
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      <button className='btn btn-secondary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ReactForm;
