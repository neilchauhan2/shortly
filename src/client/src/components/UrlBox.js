import React, { Component } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../store/actions/errorActions";
import { getUrl } from "../store/actions/urlActions";
import UrlSuccess from "./UrlSuccess";
import UrlError from "./UrlError";

class UrlBox extends Component {
  state = {
    longUrl: "",
    msg: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "URL_ERROR") {
        this.setState({
          msg: error.msg
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }
  }

  onClick = e => {
    e.preventDefault();
    this.props.clearErrors();
    const { longUrl } = this.state;
    if (this.props.isAuthenticated) {
      this.props.getUrl(longUrl);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { url, isAuthenticated } = this.props;
    return (
      <section className="hero container">
        <div className="hero-body">
          <div className="container is-fluid">
            <h1 className="title">Enter Url to shorten</h1>
            <h1 className="subtitle is-size-6">*Please login to try!</h1>
            <div className="field is-grouped ">
              <p className="control is-expanded">
                <input
                  name="longUrl"
                  onChange={this.onChange}
                  className="input is-medium "
                  type="text"
                  placeholder="Enter link to shorten"
                />
              </p>
              <p className="control">
                <button
                  onClick={this.onClick}
                  className={"button is-info url-btn is-medium ".concat(
                    isAuthenticated ? " is-active " : " is-static"
                  )}
                >
                  Shorten
                </button>
              </p>
            </div>

            {this.state.msg ? <UrlError msg={this.state.msg} /> : null}

            {url ? <UrlSuccess shortUrl={url.shortUrl} /> : null}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    url: state.url.url,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getUrl, clearErrors }
)(UrlBox);
