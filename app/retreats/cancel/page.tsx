// app/success/page.tsx
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="flex align-center justify-center">
      <div className="text-center">
        <h1 className="bold mb4">Payment Cancelled</h1>
        <p className="mb6">Your payment was cancelled. No charges were made.</p>
        <Link
          href="/retreats/fecundity-of-decay/checkout"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}