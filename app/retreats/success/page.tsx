// app/success/page.tsx
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Your Spot is Reserved!</h1>
                </div>
                <div className='mt3'>
                    <p className="mb6">We can't wait to begin. You'll recieve a confirmation email in the next day.</p>
        <Link
          href="/"
        >
          Return Home
        </Link>
                </div>
            </div>
        </div>
  );
}