import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DigitalClock() {
    const router = useRouter()

    useEffect(() => {
        router.push('https://digital-clock-mu.vercel.app/')
    })

    return (
        <p>Loading...</p>
    )
}