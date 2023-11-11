import React, { Component } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { calcWidth } from "../helper/res";
import defaultQRProps from "../constants/defaultQRProps";

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQrCode: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.qrCodeContent !== prevProps.qrCodeContent ||
      this.props.logo !== prevProps.logo ||
      this.props.color !== prevProps.color ||
      this.props.codeStyle !== prevProps.codeStyle ||
      this.props.backgroundColor !== prevProps.backgroundColor ||
      this.props.logoSize !== prevProps.logoSize
    ) {
      this.setState({ showQrCode: false }, () => {
        this.setState({ showQrCode: true });
      });
    }
  }

  render() {
    const {
      qrCodeContent,
      logo,
      color,
      codeStyle,
      backgroundColor,
      logoSize,
      ...otherProps
    } = this.props;
    const { showQrCode } = this.state;

    const qrProps = {
      content: qrCodeContent,
      color: color || defaultQRProps.color,
      codeStyle: codeStyle || defaultQRProps.codeStyle,
      backgroundColor: backgroundColor || defaultQRProps.backgroundColor,
      logoSize: logoSize || defaultQRProps.logoSize,
    };

    if (logo && logo.uri) {
      qrProps.logo = logo;
    }

    return (
      qrCodeContent && showQrCode && <QRCode {...qrProps} {...otherProps} />
    );
  }
}

export default QR;
