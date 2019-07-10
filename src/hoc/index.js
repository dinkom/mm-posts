import React from 'react';

const renderMessage = 'Hello from';

export function withRenderMessage(WrappedComponent, componentName) {
  return class extends React.Component {
    render() {
      console.log(`${renderMessage} ${componentName}`);
      return <WrappedComponent {...this.props} />;
    }
  };
}
