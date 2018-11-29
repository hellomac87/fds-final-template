import React, { Component } from 'react';
import ProductDetail from '../containers/ProductDetail';

class ProductPage extends Component {
  render() {
    const { match } = this.props;
    const productId = match.params.productId;
    return <ProductDetail productId={productId} />;
  }
}

export default ProductPage;
