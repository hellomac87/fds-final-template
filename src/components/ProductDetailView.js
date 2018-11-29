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
  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    return (
      <div>
        <div>{id}</div>
        <div>{title}</div>
        <select>
          {options.map(o => (
            <option value={o.id} key={o.id}>
              {o.title}
            </option>
          ))}
        </select>
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
