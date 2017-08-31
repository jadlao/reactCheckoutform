import React from 'react';
import pluralize from 'pluralize';

var OrderSummary = React.createClass({
    render: function(){
        var duration = this.props.duration + " " + pluralize('day',parseInt(this.props.duration));

        // Initial total calculation
        var initialTotal = this.props.duration * this.props.price;

        // Discount calculation
        var discount = Math.floor((initialTotal / 100) * this.props.discount);

        // Subtotal (with discount)
        var subTotal = initialTotal - discount;

        // Calculate tax
        var tax = Math.floor((subTotal / 100) * this.props.tax);

        // Total
        var total = subTotal + tax;

        return (
            <div className="OrderSummary">
                <div className="Title">Order Summary</div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.props.price} x {duration}</td>
                            <td>{initialTotal} AUD</td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td>{discount} AUD</td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td>{subTotal} AUD</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>{tax} AUD</td>
                        </tr>
                    </tbody>
                </table>
                <div className="Total">
                    <div className="TotalLabel">Total</div>
                    <div className="Amount">
                        {total} <small>AUD</small>
                    </div>
                </div>
            </div>
        );
    }
});

export default OrderSummary;