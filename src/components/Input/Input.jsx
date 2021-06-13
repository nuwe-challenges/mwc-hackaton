import React from 'react'
import { InputStyled } from './styles'

export const Input = ({
	select = false,
	type,
	title,
	name,
	register,
	required,
	pattern,
	maxLength,
	errors,
}) => {
	return (
		<InputStyled>
			<p>{title}</p>
			{select ? (
				<select {...register(name)}>
					<option value='españa'>España</option>
					<option value='colombia'>Colombia</option>
					<option value='peru'>Perú</option>
					<option value='francia'>Francia</option>
					<option value='estados unidos'>Estados Unidos</option>
				</select>
			) : (
				<input
					type={type}
					placeholder={`Ingrese ${title}`}
					{...register(name, { required, pattern, maxLength })}
				/>
			)}
			<br />
			{errors[name] && <span>This field is required</span>}
		</InputStyled>
	)
}
