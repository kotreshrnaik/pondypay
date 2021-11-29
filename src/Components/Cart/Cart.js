import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import { removeItem } from "../../Store/actions";
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    if (state && state.items && state.items.length > 0) {
      return state.items;
    } else {
      return [];
    }
  });

  const TotalPrice = () => {
    return cartItems
      ? cartItems.reduce((a, item) => {
          a = a + item.price;
          return a;
        }, 0)
      : 0;
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="">
              <h2 className="text-center pt-2 pb-2">Cart Information</h2>

              {cartItems && cartItems.length > 0 ? (
                <div className="">
                  <Table responsive bordered hover>
                    <thead>
                      <tr>
                        <th>Sl. No. </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td>Rs. {item.price}</td>
                          <td onClick={ () => dispatch(removeItem(item)) }><i class="far fa-trash-alt"></i></td>
                        </tr>
                      ))}
                    <tr>
                      <td colSpan="2" className="text-center">
                        <b>Total</b>
                      </td>
                      <td colSpan="2">Rs. {TotalPrice()}</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <p className="p-3 alert alert-info text-center">
                  No Items Found in the cart
                </p>
              )}
              {cartItems && cartItems.length > 0 ? (
                <div className="text-center m-2">
                  <button onClick={ () => history("\checkout") } className="btn btn-success">
                    Proceed to Checkout
                  </button>
                </div>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
