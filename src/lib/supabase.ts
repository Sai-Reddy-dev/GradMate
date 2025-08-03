import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      notes: {
        Row: {
          id: string;
          title: string;
          subject: string;
          semester: string;
          file_url: string;
          file_name: string;
          file_size: number;
          uploader_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          subject: string;
          semester: string;
          file_url: string;
          file_name: string;
          file_size: number;
          uploader_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          subject?: string;
          semester?: string;
          file_url?: string;
          file_name?: string;
          file_size?: number;
          uploader_id?: string;
          created_at?: string;
        };
      };
      feedbacks: {
        Row: {
          id: string;
          user_id: string;
          user_email: string;
          feedback_text: string;
          rating: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          user_email: string;
          feedback_text: string;
          rating?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          user_email?: string;
          feedback_text?: string;
          rating?: number | null;
          created_at?: string;
        };
      };
      cgpa_calculations: {
        Row: {
          id: string;
          user_id: string;
          current_cgpa: number;
          remaining_semesters: number;
          target_cgpa: number;
          required_sgpa: number;
          calculation_result: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          current_cgpa: number;
          remaining_semesters: number;
          target_cgpa: number;
          required_sgpa: number;
          calculation_result: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          current_cgpa?: number;
          remaining_semesters?: number;
          target_cgpa?: number;
          required_sgpa?: number;
          calculation_result?: string;
          created_at?: string;
        };
      };
    };
  };
};