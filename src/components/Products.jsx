import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    };

    const filterProduct = (item) => {
        const updatedList = data.filter((x) => x.category === item);
        setFilter(updatedList);
    }

    const ShowProducts = () => {

        return (
            <>




                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelry</button>
                </div>


                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top productimg" alt={product.title} height="250px" />
                                    <div className='card-body'>
                                        <h5 className='card-title mb-0'>{product.title.substring(0, 12)}</h5>
                                        <p className='card-text lead fw-bold text-center'>
                                            ${product.price}
                                        </p>
                                        <a href="#" className='btn btn-outline-primary'>
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>

        );
    };

    return (
        <div>
            <div className='containerProduct'>
                <div className='dropdownMenu'>
                    <DropdownButton id="dropdown-basic-button" title="All Departments" >
                        <div className='dropdown-content'>
                            <Dropdown.Item href="#/action-2">Clothes</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Electronic</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Jewellery</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Home Appliance</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Cosmetics</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Houseware</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Furniture</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sporting Goods</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </div>

                <div>
                    <Container>
                        <figure className='positive-relative'>
                            <img src='./assets/home.png' className="img-fluid homepageImg" alt="homepageImg"></img>
                            <figcaption className='fig1'>
                                CATCH UP THE TRENDS
                            </figcaption>
                            <figcaption className='fig2'>
                                30% OFF!
                            </figcaption>
                        </figure>
                    </Container>
                </div>
            </div>
            <div className='container my-3 py-3'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h3 className='display-7 fw-bolder text-center latestProduct'>
                            Latest Products
                        </h3><hr className='line1' />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>

    );
}
export default Products;
