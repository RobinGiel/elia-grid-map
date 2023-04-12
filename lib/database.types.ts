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
      gridstations: {
        Row: {
          contact: string | null
          created_at: string | null
          created_by: string | null
          id: string
          location: unknown
          name: string | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          contact?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          location: unknown
          name?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          contact?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          location?: unknown
          name?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
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

