import { Product } from "./Product";

export function ProductsGrid({products, loadCart , searchTerm }){
 console.log(searchTerm);
 console.log(products[0])
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  
);

    return (

              <div className="products-grid">
        {filteredProducts.map((product) => {
          
return (
        <Product product={product} loadCart={loadCart} />
);
        })}
</div>
    );
}