'use client'
import { useRouter } from 'next/navigation'
/* using useRouter() hook can programmatically change routes from Client Components. */
// navigating

export default function Page() {
    const router = useRouter()
    
    return (
        <div>
            <h1>Hello Blog Page!</h1>
            <button type="button" onClick={() => router.push('/dashboard')}>
                Dashboard
            </button>
        </div>
    )
}