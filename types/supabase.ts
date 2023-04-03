export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      GridStation: {
        Row: {
          contact: string | null
          createdAt: string
          createdById: string
          id: string
          latitude: number
          longitude: number
          name: string
          status: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          contact?: string | null
          createdAt?: string
          createdById: string
          id?: string
          latitude: number
          longitude: number
          name: string
          status?: string | null
          updatedAt: string
          userId: string
        }
        Update: {
          contact?: string | null
          createdAt?: string
          createdById?: string
          id?: string
          latitude?: number
          longitude?: number
          name?: string
          status?: string | null
          updatedAt?: string
          userId?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

