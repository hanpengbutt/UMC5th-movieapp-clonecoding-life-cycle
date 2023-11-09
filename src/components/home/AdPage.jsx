import React from 'react';
import Ad from './Ad';

class AdPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShowAd: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ isShowAd }) => ({
      isShowAd: !isShowAd
    }));
  }

  render() {
    const { isShowAd } = this.state;

    return (
      <div>
        <Ad showAd={isShowAd} />
        <button type='button' onClick={this.handleClick}>
          {isShowAd ? '광고 안 보기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
