import React from 'react'
import { Input } from '../../Input/Input'

export const Form2 = ({ register, errors }) => {
	return (
		<section>
			<Input
				select={false}
				type='text'
				title='Nombre completo'
				name='name'
				register={register}
				required={true}
				pattern={/^[a-zA-ZÀ-ÿ\s]{1,50}$/}
				maxLength={100}
				errors={errors}
			/>
			<Input
				type='email'
				title='Correo electrónico'
				name='email'
				register={register}
				required={true}
				pattern={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
				maxLength={100}
				errors={errors}
			/>
			<Input
				type='password'
				title='Contraseña'
				name='password'
				register={register}
				required={true}
				pattern={
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
				}
				maxLength={12}
				errors={errors}
			/>
		</section>
	)
}
