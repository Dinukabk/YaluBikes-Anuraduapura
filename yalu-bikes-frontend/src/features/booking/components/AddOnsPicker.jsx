import { Form } from 'react-bootstrap';

const ADDONS = [
  { id: 'helmet', name: 'Helmet', price: 200 },
  { id: 'gopro', name: 'GoPro Camera', price: 1000 },
  { id: 'insurance', name: 'Full Insurance', price: 500 }
];

export default function AddOnsPicker({ selectedAddons, onChange }) {
  const handleChange = (id, isChecked) => {
    const newAddons = isChecked 
      ? [...selectedAddons, id]
      : selectedAddons.filter(addon => addon !== id);
    onChange(newAddons);
  };

  return (
    <div className="addons-picker">
      <h5>Add-ons</h5>
      {ADDONS.map(addon => (
        <Form.Check 
          key={addon.id}
          type="checkbox"
          id={`addon-${addon.id}`}
          label={`${addon.name} (LKR ${addon.price})`}
          checked={selectedAddons.includes(addon.id)}
          onChange={(e) => handleChange(addon.id, e.target.checked)}
        />
      ))}
    </div>
  );
}