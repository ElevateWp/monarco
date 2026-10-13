import { redirect } from 'next/navigation';

export default function LegacyEmergencyRoute() {
  redirect('/contact/');
}
