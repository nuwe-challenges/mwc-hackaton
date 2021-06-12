import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div className='App'>
			<h1>Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					name='first_name'
					{...register('firstName', { required: true })}
				/>
				{errors.firstName && <span>The input is incorrect</span>}
				<button>Send</button>
			</form>
		</div>
	)
}

export default App
