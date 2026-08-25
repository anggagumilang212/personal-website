const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.anggagumilang.my.id'

export interface ResumeData {
  id: number
  file_name: string
  file_url: string
  is_active: boolean
  created_at: string
}

/**
 * Fetch the currently active CV/Resume from the API.
 * Returns null if no active resume is found.
 */
export async function getActiveResume(): Promise<ResumeData | null> {
  try {
    const response = await fetch(`${API_BASE}/api/resume/active`, {
      cache: 'no-store' // Ensure we always fetch the latest resume and don't cache statically
    })
    
    if (!response.ok) {
      return null
    }
    
    const data = await response.json()
    return data?.data ?? null
  } catch (error) {
    // Fallback silently — frontend won't break if API is down
    console.warn('[getActiveResume] Could not fetch active resume:', error)
    return null
  }
}
