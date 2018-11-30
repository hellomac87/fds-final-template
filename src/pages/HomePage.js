import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';

// url 은 계층구조
// query 는 데이터(계층구조가 아닌것)

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    const p = new URLSearchParams(location.search); // query string 에서 정보를 뽑아낼 때 사용, URLSearchParams // qs 를 실무에선 더 많이씀
    const category = p.get('category');
    return (
      <Layout>
        <h1>Home</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to="/">All</Link>
          <Link to="/?category=macbook">macbook</Link>
          <Link to="/?category=imac">imac</Link>
          <Link to="/?category=iphone">iphone</Link>
          <Link to="/?category=watch">appleWatch</Link>
        </div>
        {/* 다른 키를 넣어서 렌더링되도록 */}
        <ProductList key={category} category={category} />
      </Layout>
    );
  }
}
