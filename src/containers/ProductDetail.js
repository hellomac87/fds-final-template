import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

class ProductDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [''],
      loading: true,
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get(`/products/${productId}`);
    this.setState({
      ...product,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <ProductDetailView {...this.state} />
      </div>
    );
  }
}

export default ProductDetail;
