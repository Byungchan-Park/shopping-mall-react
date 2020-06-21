import React from "react";

class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : jsonPageRes
      ? jsonPageRes.status
      : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occured on server`
          : "An error occured on client"}
      </p>
    );
  }
}

export default Error;
