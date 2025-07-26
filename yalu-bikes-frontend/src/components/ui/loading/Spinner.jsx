import './Spinner.css';

export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: '1rem',
    md: '2rem',
    lg: '4rem'
  };

  return (
    <div className={`spinner-container ${className}`}>
      <div 
        className="spinner" 
        style={{ width: sizes[size], height: sizes[size] }}
      ></div>
    </div>
  );
}