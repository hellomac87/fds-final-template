import React, { Component } from 'react';
import ProductDetail from '../containers/ProductDetail';
import Layout from '../components/Layout';

class ProductPage extends Component {
  render() {
    const { match } = this.props;
    const productId = match.params.productId;
    return (
      <Layout>
        <ProductDetail productId={productId} />
      </Layout>
    );
  }
}

export default ProductPage;
