'use client';

import { useState, FormEvent, useEffect } from 'react';
import { createProductWithAxios, updateProductWithAxios, getProductByIdWithAxios, getProductsWithAxios, Product, deleteProductWithAxios } from '../../services/api';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ProductEditForm() {
    const searchParams = useSearchParams();
    const productId = searchParams.get('id');
    const isEditing = !!productId;
    const router = useRouter();
    
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        description: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
        
        if (productId) {
            const fetchProduct = async () => {
                try {
                    setLoading(true);
                    const data = await getProductByIdWithAxios(productId);
                    setProduct({
                        name: data.name,
                        price: data.price,
                        image: data.image,
                        description: data.description
                    });
                } catch (err) {
                    setError('Failed to load product');
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            
            fetchProduct();
        }
    }, [productId]);
    
    const fetchProducts = async () => {
        try {
            setProductsLoading(true);
            const data = await getProductsWithAxios();
            setProducts(data);
        } catch (err) {
            console.error('Failed to fetch products:', err);
        } finally {
            setProductsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            if (isEditing && productId) {
                await updateProductWithAxios(productId, product);
            } else {
                await createProductWithAxios(product);
            }
            alert(isEditing ? 'Product updated successfully!' : 'Product created successfully!');
            fetchProducts(); // Refresh the product list
            
            if (!isEditing) {
                // Reset the form after creating a new product
                setProduct({
                    name: '',
                    price: '',
                    image: '',
                    description: ''
                });
            }
        } catch (err) {
            setError('Failed to save product');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    
    const handleEdit = (id: string) => {
        router.push(`/form?id=${id}`);
    };
    
    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteProductWithAxios(id);
                fetchProducts(); // Refresh the list
                
                // If editing the product that was just deleted, reset the form
                if (productId === id) {
                    router.push('/form');
                }
            } catch (err) {
                console.error('Failed to delete product:', err);
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 mt-20 pb-10 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-2xl font-bold text-black mb-6 text-center">
                    {isEditing ? 'Edit Product' : 'Create Product'}
                </h1>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-sm font-medium text-black">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="pr</td>ice" className="mb-1 text-sm font-medium text-black">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="image" className="mb-1 text-sm font-medium text-black">Image URL</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="description" className="mb-1 text-sm font-medium text-black">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            rows={5}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            disabled={loading}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className={`w-full font-medium py-2 px-4 rounded-md transition-colors duration-300 mt-4 
                        ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        disabled={loading}>
                        {loading ? 'Processing...' : isEditing ? 'Update Product' : 'Create Product'}
                    </button>
                </form>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-black mb-6">Product List</h2>
                
                {productsLoading ? (
                    <p className="text-center py-4">Loading products...</p>
                ) : products.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Image</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">
                                            <img 
                                                src={product.image} 
                                                alt={product.name} 
                                                className="h-12 w-12 object-cover rounded cursor-pointer" 
                                                onClick={() => window.open(product.image, '_blank')}
                                                title="Click to view full image"
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{product.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">${parseFloat(product.price).toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <div className="truncate max-w-xs text-black">{product.description}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">
                                            <button 
                                                onClick={() => handleEdit(product.id)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-2"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(product.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center py-4">No products found.</p>
                )}
            </div>
        </div>
    );
}