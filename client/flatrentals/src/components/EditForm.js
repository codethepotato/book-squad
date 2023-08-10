import React, {useState} from 'react';


function EditForm({orderId, onClose}) {
    const [updatedCost, setUpdatedCost] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:5555/orders/${orderId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({cost: updatedCost}),
            });

            if (response.ok) {
                onClose();
            } else {
                console.error('Edit failed');
            }
        } catch (error){
            console.error('Edit request error:', error)
        }
    }

    return(
        <div>
            <h3>Edit Order</h3>
            <label htmlFor="updatedCost">Updated Cost:</label>
            <input
                type="number"
                id="updatedCost"
                value={updatedCost}
                onChange={(e) => setUpdatedCost(e.target.value)}
            />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    )
}

export default EditForm