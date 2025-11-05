// app/success/page.tsx
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h2>You're joining the pilgrimage</h2>
                </div>
                <div className='mt1'>
                    <p className="mb2">You'll recieve a confirmation email in the next day. We can't wait to begin. </p>
                    <p className="mb6">If needed, contact Susannah at susannah@uncertaintypossibility.com</p>
        <Link
          href="/retreats/the-fecundity-of-decay"
        >
         &larr; Return
        </Link>
                </div>
            </div>
        </div>
  );
}