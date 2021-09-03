import React, {ReactElement} from 'react';

interface Props {
  children: ReactElement;
  fallback: (e: Error) => ReactElement;
}

interface State {
  error: null | Error
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {error: null};

  static getDerivedStateFromError(error: Error): State {
    return {error};
  }

  render(): ReactElement {
    if (this.state.error) {
      return this.props.fallback(this.state.error);
    }
    return this.props.children;
  }
}
