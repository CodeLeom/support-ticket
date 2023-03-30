import { useState } from "react"
import { useSelector } from "react-redux"

function NewTicket() {
    const {user} = useSelector((state) => state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('Billing/Sales')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
      <section className="heading">
        <h3>Create New Ticket</h3>
        <p>Please fill out the form below to submit a ticket</p>
      </section>

      <section className="form">
            <div className="form-group">
                <label htmlFor="name">Customer Full Name</label>
                <input type="text" className="form-control" value={name} disabled />
            </div>
            <div className="form-group">
                <label htmlFor="email">Customer Email</label>
                <input type="text" className="form-control" value={email} disabled />
            </div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                        <option value="Billing/Sales">Billing/Sales</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Abuse Report"> Abuse Report</option>
                        <option value="Technical">Technical</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description of your issues/support</label>
                    <textarea name="description" id="description" className="form-control" placeholder="Description of your ticket" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-block">Submit Ticket</button>
                </div>
            </form>
      </section>
    </>
  )
}

export default NewTicket
