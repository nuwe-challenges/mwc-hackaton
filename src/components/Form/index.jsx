import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form2 } from './Forms/Form2'
import { Form3 } from './Forms/Form3'
import { Form4 } from './Forms/Form4'
import { FormStyled } from './styles'

export const Form = ({ step, setStep }) => {
	let initialData = {
		name: '',
		email: '',
		password: '',
		phoneNumber: '',
		address: '',
		country: '',
		numTarget: '',
		cod: '',
	}
	const [data, setData] = useState(initialData)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (d) => {
		setData({ ...data, ...d })

		if (step < 4) setStep((s) => s + 1)

		if (step + 1 === 5) {
			setStep(1)
			alert('Registrado')
		}
	}
	console.log(data)
	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			{step === 2 && <Form2 register={register} errors={errors} />}
			{step === 3 && <Form3 register={register} errors={errors} />}
			{step === 4 && <Form4 register={register} errors={errors} />}
			<button>Enviar</button>
		</FormStyled>
	)
}
