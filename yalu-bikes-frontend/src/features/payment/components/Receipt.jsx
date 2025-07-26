import { Button } from 'react-bootstrap';
import { downloadPDF } from '../../../utils/helpers';

export default function Receipt({ booking, payment }) {
  const handleDownload = () => {
    const receiptContent = `
      YaluBikes Receipt
      -------------------------
      Booking ID: ${booking._id}
      Date: ${new Date().toLocaleDateString()}
      Amount: LKR ${payment.amount}
      Payment Method: ${payment.method}
    `;
    downloadPDF(receiptContent, `receipt-${booking._id}`);
  };

  return (
    <div className="receipt p-4 border rounded">
      <h4>Payment Successful</h4>
      <p>Booking ID: <strong>{booking._id}</strong></p>
      <p>Amount Paid: <strong>LKR {payment.amount.toFixed(2)}</strong></p>
      <Button 
        variant="outline-primary" 
        onClick={handleDownload}
        className="mt-3"
      >
        Download Receipt
      </Button>
    </div>
  );
}