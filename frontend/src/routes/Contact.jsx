import { useSearchParams } from "react-router-dom";

const products = [
    {
      id: 1,
      product_name: 'iPhone',
      price: 1000,
    },
    {
      id: 2,
      product_name: 'iPad',
      price: 500,
    },
    {
      id: 3,
      product_name: 'iPod',
      price: 40,
    },
    {
      id: 4,
      product_name: 'MacBook',
      price: 2000,
    },
  ];

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //URLを自動で変更する
  const paramsValue = searchParams.get('product_name') || '';

  const handleChange = (event) => {
    const product_name = event.target.value;
    if (product_name) {
      setSearchParams({ product_name: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  const searchProducts = () => {
    return products.filter((product) => {
      return product.product_name.includes(
        searchParams.get('product_name') || ''
      );
    });
  };

  return (
    <div className="m-4">
      <h1 className='text-4xl font-bold'>Contact</h1>
      <input className="border border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-gray-500" type="text" placeholder="search" onChange={handleChange} value={paramsValue} />
      <ul className='m-2 list-disc text-gray-700'>
        {searchProducts().map((product) => (
          <li key={product.id}>
            {product.product_name}/{product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact;