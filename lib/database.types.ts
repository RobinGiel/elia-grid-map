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
          created_at: string
          created_by_id: string
          id: string
          latitude: number
          longitude: number
          name: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          contact?: string | null
          created_at?: string
          created_by_id: string
          id?: string
          latitude: number
          longitude: number
          name: string
          status?: string | null
          updated_at: string
          user_id: string
        }
        Update: {
          contact?: string | null
          created_at?: string
          created_by_id?: string
          id?: string
          latitude?: number
          longitude?: number
          name?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
      }
      profiles: {
        Row: {
          email: string | null
          id: string
        }
        Insert: {
          email?: string | null
          id: string
        }
        Update: {
          email?: string | null
          id?: string
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

