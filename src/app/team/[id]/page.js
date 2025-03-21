import { redirect } from 'next/navigation'
/* use redirect for Server Component */
// navigating

async function fetchTeam(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }) {
  const { id } = await params
  if (!id) {
    redirect('/login')
  }
 
  const team = await fetchTeam(id)
  if (!team) {
    redirect('/join')
  }
 
  // ...
}