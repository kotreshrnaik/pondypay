import React, { useEffect } from 'react'
import axios from 'axios'

const Payment = (props) => {
    const Price = 120;

    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
    
          script.onload = () => {
            resolve(true);
          };
    
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };
    
      const displayRazorpay = async (amount, username, useremail, userphone) => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("You are offline..");
          return;
        }
    
        const options = {
          key: "rzp_test_YPt7F9CZJqkwGO",
          currency: "INR",
          amount: amount * 100,
          contact: userphone,
          email: useremail,
          name: username,
          description: "Payment for Course",
    
          handler: function (response) {
            // alert(response.razorpay_payment_id);
            // console.log(response)
            // console.log(username)
            const paymentid = response.razorpay_payment_id;
            const Values = {
              paymentid,
              username,
              useremail,
            };
    
            // console.log(Values);
    
            axios
              .post(
                "https://digitalagilityinstitute.com/Api/Payment/payment.php",
                Values
              )
              .then(function (response) {
                // console.log(response);
                // setformStatus(response.data);
              })
              .catch(function (error) {
                console.log(error);
                // setformStatus(error.data);
              });
    
            // alert("Success payment Done.");
    
            // history.push('/success');
          },
          prefill: {
            name: username,
            contact: userphone,
            email: useremail,
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };

      
      useEffect(() => {
        displayRazorpay(Price);
      })

    return (
        <div>
            
        </div>
    )
}

export default Payment
