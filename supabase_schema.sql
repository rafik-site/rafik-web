-- Script SQL para crear la tabla de licencias en Supabase

CREATE TABLE IF NOT EXISTS licencias (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre_cliente TEXT NOT NULL,
    hwid_placa TEXT NOT NULL,
    codigo_generado TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE licencias ENABLE ROW LEVEL SECURITY;

-- Crear políticas de acceso (Solo usuarios autenticados pueden ver e insertar)
CREATE POLICY "Permitir lectura a usuarios autenticados" 
ON licencias FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Permitir inserción a usuarios autenticados" 
ON licencias FOR INSERT 
TO authenticated 
WITH CHECK (true);
