import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {user} = useAuth();
    const email = user.email
    
    const [orders, setOrders] = useState([]);
    // const [isDeleted, setIsDeleted] = useState(null)
    useEffect(() => {
        fetch(`https://creepy-chupacabra-59453.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data))
    }, [])


    // const handleDelete = (id) => {
    //     fetch(`https://creepy-chupacabra-59453.herokuapp.com/remove/${id}`, {
    //         method: "DELETE",
    //         headers: {"content-type": "application/json"},
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             if (result.deletedCount) {
    //                 setIsDeleted(true)
    //             }else {
    //                 setIsDeleted(false)
    //             }
    //         })
    //     console.log(id)
    // }

    const handleDelete = id => {
      const url = `https://creepy-chupacabra-59453.herokuapp.com/remove/${id}`;
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'}
      })
          .then(res => res.json())
          .then(data=> {
              console.log(data)
              const remaining = orders.filter(order => order._id !== id)
              setOrders(remaining)
          })
      
  }

    return (
        <div>
      
      <h2>User: {user?.displayName}</h2>
      <h2>User email: {user?.email}</h2>
      <h3>Ordered Item: {orders?.length}</h3>
      <div className="all-products">
        <div className="row container text-center">
          {orders?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className=" border border p-2 m-2">
                {/* <h4><span className="text-danger">User:</span> {user?.displayName}</h4> */}
                <img src={pd?.img} className="img-fluid" alt="" />
                <h5>Ordered Service: {pd?.name}</h5>
                <h5><span className="text-danger">Price:</span> ${pd?.price}</h5>
                <h6><span className="text-danger">Description:</span> <small>{pd?.description}</small></h6>
                <button
                    onClick={() => handleDelete(pd._id)}
                 className="btn btn-danger">Cancel this order</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Link to="/success"> <button className="btn btn-success">Place my order</button></Link>
      
    </div>
    );
};

export default Dashboard;