import './Skeleton.css';

export default function Skeleton({ type = 'text', width, height, className = '' }) {
  const classes = `skeleton ${type} ${className}`;
  const style = {};
  
  if (width) style.width = width;
  if (height) style.height = height;

  return <div className={classes} style={style}></div>;
}