import React, { Component } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { calcWidth } from "../helper/res";

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
    const { qrCodeContent, logo, color, codeStyle, backgroundColor, logoSize } =
      this.props;
    const { showQrCode } = this.state;

    const qrProps = {
      content: qrCodeContent,
      color: color || "#0802A3",
      codeStyle: codeStyle || "square",
      backgroundColor: backgroundColor || "#ffffff",
      logoSize: logoSize || calcWidth(15),
    };

    if (logo.uri) {
      qrProps.logo = logo;
    }

    return qrCodeContent && showQrCode && <QRCode {...qrProps} />;
  }
}

export default QR;
