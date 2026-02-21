import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './menu.css'

export default function Menus() {
  const [menus, setMenus] = useState([])
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    availability: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAddMenu = () => {
    if (formData.name && formData.category && formData.price) {
      setMenus([...menus, { ...formData, id: Date.now() }])
      setFormData({ name: '', category: '', price: '', description: '', availability: '' })
    }
  }

  const handleDeleteMenu = (id) => {
    setMenus(menus.filter(m => m.id !== id))
  }

  return (
    <div className="menu-container">
      <h1>Menu Management</h1>
      
      <div className="menu-form">
        <h2>Add New Menu Item</h2>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter menu item name"
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleInputChange}>
            <option value="">Select category</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
            <option value="Sides">Sides</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter item description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Availability</label>
          <select name="availability" value={formData.availability} onChange={handleInputChange}>
            <option value="">Select availability</option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Seasonal">Seasonal</option>
          </select>
        </div>
        <button onClick={handleAddMenu} className="btn-add">Add Menu Item</button>
      </div>

      <div className="menu-list">
        <h2>Menu Items</h2>
        {menus.length === 0 ? (
          <p>No menu items yet.</p>
        ) : (
          <div className="menu-grid">
            {menus.map((menu) => (
              <div key={menu.id} className="menu-card">
                <div className="menu-header">
                  <h3>{menu.name}</h3>
                  <span className={`availability ${menu.availability.toLowerCase().replace(' ', '-')}`}>
                    {menu.availability}
                  </span>
                </div>
                <p className="category">{menu.category}</p>
                <p className="description">{menu.description}</p>
                <div className="menu-footer">
                  <span className="price">${menu.price}</span>
                  <div style={{display:'flex',gap:8}}>
                    <button
                      onClick={() => navigate(`/topup?item=${encodeURIComponent(menu.name)}`)}
                      className="btn-outline"
                    >
                      เติมเลย
                    </button>
                    <button 
                      onClick={() => handleDeleteMenu(menu.id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
