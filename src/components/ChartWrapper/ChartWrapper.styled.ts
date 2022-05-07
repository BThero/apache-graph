import styled from 'styled-components';

interface IWrapperProps {
  height: number;
}

const Wrapper = styled.div<IWrapperProps>`
  height: ${({ height }) => `${height}px`};
  width: 100%;
`;

export { Wrapper };
