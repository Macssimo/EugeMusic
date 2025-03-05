import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if(this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>¡Ups! Algo salió mal</h2>
          <button onClick={() => window.location.reload()}>
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}