import React from "react";
import NoPayType from "./NoPayType";
import CreditCardPayType from "./CreditCardPayType";
import ChequePayType from "./ChequePayType";
import PurchaseOrderPayType from "./PurchaseOrderPayType";

class PayTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
    this.state = { selectedPayType: null };
  }

  onPayTypeSelected(e) {
    console.log(e.target.value);
    this.setState({ selectedPayType: e.target.value });
  }

  render() {
    let PayTypeCustomComponent = NoPayType;
    if (this.state.selectedPayType == "Credit Card") {
      PayTypeCustomComponent = CreditCardPayType;
    } else if (this.state.selectedPayType == "Cheque") {
      PayTypeCustomComponent = ChequePayType;
    } else if (this.state.selectedPayType == "Purchase Order") {
      PayTypeCustomComponent = PurchaseOrderPayType;
    }

    return (
      <div>
        <div className="field">
          <label htmlFor="order_pay_type">Pay Type</label>
          <select
            onChange={this.onPayTypeSelected}
            name="order[pay_type]"
            id="pay_type"
          >
            <option value="">Select a payment method</option>
            <option value="Cheque">Cheque</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Purchase Order">Purchase Order</option>
          </select>
        </div>
        <PayTypeCustomComponent />
      </div>
    );
  }
}

export default PayTypeSelector;
