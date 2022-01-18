import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { 
  Page,
  Table as ProductTable, 
  Pagination, 
  PaginationButton,
  PaginationItem
} from './styles';

type Product = {
  id: string;
  title: string;
  price:  number;
}

const Table: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [total, setTotal] = useState(0);  
  const [limit, setLimit] = useState(5); 
  const [pages, setPages] = useState<number[]>(); 
  const [currentPage, setCurrentPage] = useState(1); 


  const paginationData = (
    array: Product[], pageSize: number, pageNumber: number
    ) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };
  
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const paginateData = paginationData(response.data, limit, currentPage);

      setTotal(response.data.length);
    
      const totalPages = Math.ceil(total / limit);

      const pagesArray = [];

      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }

      setPages(pagesArray);
      setProducts(paginateData);
    }

    loadProducts();
  }, [limit, total, currentPage]);

  return (
    <Page>
      <h3>Product Tables</h3>
      <ProductTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <Pagination>
        <div>Ammount {total}</div>
        <PaginationButton>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>Previous</PaginationItem>
          )}
          {pages && pages.map(page => (
            <PaginationItem 
              key={page} 
              onClick={() => setCurrentPage(page)}
            >{page}
            </PaginationItem>
          ))}
          {pages?.length && currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>Next</PaginationItem>
          )}
        </PaginationButton>
      </Pagination>
    </Page>
  );
}

export default Table;