import React, { Component } from 'react';
import ProductListView from '../components/ProductListView';
import api from '../api';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  async componentDidMount() {
    const { data: products } = await api.get('/products');

    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products } = this.state;
    return <ProductListView products={products} />;
  }
}

export default ProductList;
