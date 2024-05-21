import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);

    // Update the state with the error message
    this.setState({
      hasError: true,
      errorMessage: error.toString(),
    });
  }

  render() {
    if (this.state.hasError) {
      // If an error occurred, render a fallback UI
      return (
        <div className="error-container">
          <h1>Oops, something went wrong.</h1>
          <p>Error: {this.state.errorMessage}</p>
          <p>Please try again later or contact support if the issue persists.</p>
        </div>
      );
    }

    // If no error occurred, render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;
