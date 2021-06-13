import React from 'react'
import { Input } from '../../Input/Input'

export const Form3 = ({ register, errors }) => {
	return (
		<section>
			<Input
				type='number'
				title='Número de teléfono'
				name='phoneNumber'
				register={register}
				required={false}
				pattern={/^\d{7,14}$/}
				maxLength={20}
				errors={errors}
			/>
			<Input
				type='text'
				title='Dirección'
				name='address'
				register={register}
				required={false}
				pattern={''}
				maxLength={100}
				errors={errors}
			/>
			<Input
				select={true}
				type='text'
				title='País de residencia'
				name='country'
				register={register}
				required={false}
				pattern={''}
				maxLength={100}
				errors={errors}
			/>
		</section>
	)
}
