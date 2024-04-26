'use client';
import React from 'react';

import CustomInput from './CustomInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginUserType, loginUserSchema } from '@/utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserLogin } from '@/lib/hooks';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginUserType>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { mutate, isPending } = useUserLogin();

  const onFormSubmit: SubmitHandler<LoginUserType> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <main className="flex items-center justify-center max-w-[1120px] mx-auto h-dvh">
      <div className="card w-96 bg-base-300 shadow-xl">
        <form className="card-body gap-4" onSubmit={handleSubmit(onFormSubmit)}>
          <h2 className="card-title text-center">Login Form</h2>
          <CustomInput
            type="text"
            placeholder="username"
            register={register}
            errors={errors.username}
          />
          <CustomInput
            type="password"
            placeholder="password"
            register={register}
            errors={errors.password}
          />
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-outline w-full"
              type="submit"
            >
              {isPending && <span className="loading loading-spinner"></span>}
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
