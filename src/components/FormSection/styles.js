import styled from 'styled-components'

export const FormSectionStyled = styled.section`
	background-color: white;
	height: 100%;
	width: 59%;

	.Container {
		margin: 3rem 3rem;

		header {
			display: flex;
			justify-content: ${(props) =>
				props.step === 1 ? 'flex-end' : 'space-between'};
			margin-bottom: 5rem;

			span {
				align-items: center;
				display: flex;
				font-size: 0.8rem;
				justify-content: space-between;
			}

			.Step-1 {
				color: #8692a6;

				span {
					color: green;
					margin-left: 0.2rem;
				}
			}

			.Step-2-3-4 {
				align-items: flex-end;
				color: #bdbdbd;
				display: flex;
				flex-direction: column;

				font-size: 0.7rem;

				span {
					font-size: 0.8rem;
					color: #8692a6;
				}
			}

			.Back {
				color: #8692a6;
				cursor: pointer;
				font-weight: 600;
				width: 12%;
			}
		}

		.Form-container {
			margin: 2rem 0 0 3rem;

			p {
				color: #8692a6;
				font-size: 0.7rem;
				margin-top: 0.5rem;
				width: 65%;
			}
		}
	}
`
