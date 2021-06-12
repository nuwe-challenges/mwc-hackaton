import styled from 'styled-components'

export const CreateAccountCardStyled = styled.div`
	align-items: center;
	background-color: ${(props) => (props.click ? '#F5F9FF' : '#ffffff')};
	border: 0.1rem solid ${(props) => (props.click ? '#4F934A' : '#bdbdbdbd')};
	border-radius: 0.3rem;

	cursor: pointer;
	display: flex;
	gap: 1rem;
	padding: 1rem;

	width: 85%;

	&:hover {
		background-color: #f5f9ff;
		border: 0.1rem solid #4f934a;
	}

	picture:nth-of-type(1) {
		width: 20%;
		img {
			height: 3rem;
			width: 3rem;
		}
	}

	div {
		h3 {
			font-size: 1rem;
		}
		p {
			color: gray;
			font-size: 0.8rem;
		}
	}

	picture:nth-of-type(2) {
		display: flex;
		justify-content: center;
		opacity: ${(props) => (props.click ? '1' : '0')};
		width: 15%;

		img {
			height: 0.8rem;
			width: 0.8rem;
		}
	}
`
