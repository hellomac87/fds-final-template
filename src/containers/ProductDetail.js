import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

class ProductDetail extends Component {
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
    const { data: product } = await api.get('/products/1');
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
