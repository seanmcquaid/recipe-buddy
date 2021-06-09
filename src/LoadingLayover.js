import styled from 'styled-components';
import propTypes from 'prop-types';
import LoadingSpinner from './components/LoadingSpinner';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from './store/loading/selectors';

const LoadingLayover = () => {
  const isLoading = useSelector(isLoadingSelector);
  return (
    <StyledLoadingLayover>
      <StyledLoadingSpinner isLoading={isLoading} />
    </StyledLoadingLayover>
  );
};

const StyledLoadingLayover = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledLoadingSpinner = styled(LoadingSpinner)`
  position: absolute;
  top: 50%;
  right: 50%;
`;

LoadingLayover.propTypes = {
  children: propTypes.element.isRequired,
};

export default LoadingLayover;
