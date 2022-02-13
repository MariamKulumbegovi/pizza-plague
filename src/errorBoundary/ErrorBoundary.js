import React from 'react';
import { BoundaryContainer, BoundaryWrapper, ErrorMessage, Title } from '.';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };
  componentDidCatch(error) {
    this.setState({
      error,
    });
  }
  render() {
    const { error } = this.state;
    if (error) {
      return (
        <BoundaryContainer>
          <BoundaryWrapper>
            <Title className="red">Something went wrong...</Title>
            <ErrorMessage className="red">{error.toString()}</ErrorMessage>
          </BoundaryWrapper>
        </BoundaryContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
