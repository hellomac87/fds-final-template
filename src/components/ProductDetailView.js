import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedOptionId: '',
      quantity: 1,
    };
  }

  handleQuantityChange = e => {
    const quantity = parseInt(e.target.value);
    this.setState({
      quantity,
    });
  };
  handleOptionChange = e => {
    const selectedOptionId = parseInt(e.target.value);
    this.setState({
      selectedOptionId,
      quantity: 1,
    });
  };

  render() {
    const { quantity, selectedOptionId } = this.state;
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    const selectedOption = options.find(o => o.id === selectedOptionId);
    const totalPrice = selectedOption && selectedOption.price * quantity;
    return (
      <div>
        <div>{id}</div>
        <div>{title}</div>
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          <option value="" disabled>
            옵션을 선택하세여
          </option>
          {options.map(o => (
            <option value={o.id} key={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>
          총가격
          {totalPrice}
        </div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} style={{ width: 100, height: 100 }} />
        {detailImgUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={title}
            style={{ width: 100, height: 100 }}
          />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
