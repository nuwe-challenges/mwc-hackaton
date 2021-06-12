import styled from 'styled-components'

export const ImageContentStyled = styled.section`
	background-image: url('/background.png');
	background-size: cover;
	color: white;
	height: 100%;

	width: 45%;

	.BackgroundGreen {
		align-items: center;
		background-color: #569b51e0;
		display: flex;
		height: 100%;

		div {
			display: flex;
			flex-direction: column;
			height: 35%;
			justify-content: space-between;

			margin: 3rem;
			position: relative;

			span {
				color: #4f934a;
				font-family: 'Gayathri';
				font-size: 4rem;
				height: 0;
			}

			p {
				font-size: 0.8rem;
				letter-spacing: 0.06rem;
				line-height: 1.4rem;
				margin-bottom: 3rem;
			}

			svg {
				bottom: 0;
				height: 1.5rem;
				position: absolute;
				right: 1.8rem;

				width: 1.5rem;
			}
		}
	}
`
