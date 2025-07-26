import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarItem({ to, icon, label }) {
  return (
    <li className="nav-item">
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        <FontAwesomeIcon icon={icon} className="me-2" />
        {label}
      </NavLink>
    </li>
  );
}