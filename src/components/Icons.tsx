// Inline SVG icon library — no external dependency
type P = { className?: string }

export function EnvelopeIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 4.5L8 9L14.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export function MapPinIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.515 10.485 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function ClockIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 5V8.5L10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CalendarIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="2.5" width="13" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6.5H14.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 1.5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 1.5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 1.5H2.5C1.948 1.5 1.5 1.948 1.5 2.5V13.5C1.5 14.052 1.948 14.5 2.5 14.5H13.5C14.052 14.5 14.5 14.052 14.5 13.5V2.5C14.5 1.948 14.052 1.5 13.5 1.5ZM5.5 12.5H3.5V6.5H5.5V12.5ZM4.5 5.648C3.837 5.648 3.3 5.11 3.3 4.448C3.3 3.786 3.837 3.248 4.5 3.248C5.163 3.248 5.7 3.786 5.7 4.448C5.7 5.11 5.163 5.648 4.5 5.648ZM12.5 12.5H10.5V9.4C10.5 8.68 10.486 7.752 9.494 7.752C8.487 7.752 8.333 8.534 8.333 9.347V12.5H6.333V6.5H8.25V7.354H8.277C8.544 6.846 9.197 6.31 10.167 6.31C12.192 6.31 12.5 7.646 12.5 9.388V12.5Z" />
    </svg>
  )
}

export function XIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.06 1.5H14.116L9.554 6.756L14.892 14.5H10.72L7.454 10.22L3.716 14.5H1.659L6.538 8.875L1.411 1.5H5.686L8.639 5.413L12.06 1.5ZM11.35 13.317H12.488L5.013 2.665H3.793L11.35 13.317Z" />
    </svg>
  )
}

export function BrushIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L18 4L8 14L5.5 14.5L6 12L16 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M4 15.5C4 15.5 3.5 17.5 5.5 17.5C6.5 17.5 7 17 7 16.5C7 15.5 5.5 15 4 15.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

export function MonitorIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 17H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10 14V17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function MegaphoneIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4C15 4 17 6 17 10C17 14 15 16 15 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 7.5H6L13 4V16L6 12.5H3C2.172 12.5 1.5 11.828 1.5 11V9C1.5 8.172 2.172 7.5 3 7.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 12.5V16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function PrinterIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="13" width="12" height="5" rx="0.75" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 13V8H16V13" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 8V3H14V8" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="14.5" cy="10.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-3 h-3' }: P) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TrendingUpIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 13L7 8L10 11L16 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4H16V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function UsersIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 15.5C1.5 13.015 4.015 11 7 11C9.985 11 12.5 13.015 12.5 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="13" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14.5 14C15.5 14 16.5 14.8 16.5 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function CurrencyIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 5.5V12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6.5 7.5C6.5 6.672 7.172 6 8 6H9.5C10.328 6 11 6.672 11 7.5C11 8.328 10.328 9 9.5 9H8.5C7.672 9 7 9.672 7 10.5C7 11.328 7.672 12 8.5 12H10C10.828 12 11.5 11.328 11.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function ShieldCheckIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.5L2.5 4.5V9.5C2.5 13 5.5 16 9 16.5C12.5 16 15.5 13 15.5 9.5V4.5L9 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LayersIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.5L16 5.5L9 9.5L2 5.5L9 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M2 9L9 13L16 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12.5L9 16.5L16 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TargetIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function GlobeIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 2C9 2 6.5 5 6.5 9C6.5 13 9 16 9 16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 2C9 2 11.5 5 11.5 9C11.5 13 9 16 9 16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 9H15.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function TreeIcon({ className = 'w-5 h-5' }: P) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 9C9 9 5 8 4 4C4 4 7 4 9 7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 11.5C9 11.5 13 10.5 14 6.5C14 6.5 11 6.5 9 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 16H12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function BriefcaseIcon({ className = 'w-4 h-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="4.5" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 4.5V3C4.5 2.448 4.948 2 5.5 2H8.5C9.052 2 9.5 2.448 9.5 3V4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 8H12.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
