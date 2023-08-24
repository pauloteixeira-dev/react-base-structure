/* eslint-disable react/function-component-definition */
import React, { createElement, ReactElement } from 'react'
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

interface IFormProps<T> {
  onSubmit: SubmitHandler<T>;
  formMethods: UseFormReturn<any>;
}

export default function Form<T>({
  children,
  onSubmit,
  formMethods,
}: IFormProps<T> & { children: ReactElement | ReactElement[] }) {
  const { register, handleSubmit } = formMethods
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
      <FormProvider {...formMethods}>
        {Array.isArray(children)
          ? children.map(child => (child.props.name
            ? createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name,
              },
            })
            : child))
          : children}
      </FormProvider>
    </form>
  )
}
