import styled from 'styled-components'

export const FormSectionStyled = styled.section`
	background-color: white;
	height: 100%;
	width: 59%;

	.Container {
		margin: 3rem 3rem 3rem 5rem;

		header {
			display: flex;
			justify-content: ${(props) =>
				props.step === 1 ? 'flex-end' : 'space-between'};
			margin-bottom: 5rem;

			span {
				align-items: center;
				display: flex;
				cursor: pointer;
				font-size: 0.8rem;

				justify-content: space-between;

				&:hover {
					transform: translateX(-0.4rem);
				}
			}

			.Step-1 {
				color: #8692a6;

				span {
					color: green;
					margin-left: 0.2rem;

					&:hover {
						transform: translateX(0);
					}
				}

				&:hover {
					transform: translateX(0);
				}
			}

			.Step-2-3-4 {
				align-items: flex-end;
				color: #bdbdbd;
				display: flex;
				flex-direction: column;

				font-size: 0.7rem;

				span {
					color: #8692a6;
					cursor: initial;
					font-size: 0.8rem;

					&:hover {
						transform: translateX(0);
					}
				}

				&:hover {
					transform: translateX(0);
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
			margin-top: 2rem;

			p {
				color: #8692a6;
				font-size: 0.8rem;
				margin-top: 0.5rem;
				width: 60%;
			}
		}
	}
`
