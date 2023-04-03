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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
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
      User: {
        Row: {
          createdAt: string
          email: string
          id: string
          name: string | null
          password: string
          role: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          email: string
          id?: string
          name?: string | null
          password: string
          role?: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          name?: string | null
          password?: string
          role?: string
          updatedAt?: string
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

