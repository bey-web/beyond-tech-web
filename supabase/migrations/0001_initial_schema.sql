-- Beyond Tech — Phase 1 schema
-- Tables: profiles (admin auth), case_studies, services, project_inquiries
-- Shared conventions: every table has id (uuid, gen_random_uuid()) and created_at (timestamptz, now())
-- RLS is ON by default on every table.

create extension if not exists "pgcrypto";

-- ─────────────────────────────────────────────
-- profiles — admin auth, role-gated writes
-- ─────────────────────────────────────────────
create table profiles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  auth_user_id uuid not null references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'member' check (role in ('admin', 'member'))
);

alter table profiles enable row level security;

create policy "profiles: user can read own profile"
  on profiles for select
  using (auth.uid() = auth_user_id);

-- helper: is the current auth user an admin?
create or replace function is_admin()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from profiles
    where auth_user_id = auth.uid() and role = 'admin'
  );
$$;

-- ─────────────────────────────────────────────
-- case_studies
-- ─────────────────────────────────────────────
create table case_studies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  industry text,
  service_type text not null check (service_type in ('business_technology', 'digital_presence', 'technology_partnership')),
  problem text not null,
  approach text not null,
  outcome text not null,
  metrics jsonb not null default '[]'::jsonb, -- array of {label, value}
  client_quote text,
  client_name text,
  image_urls text[] not null default '{}',
  pdf_url text,
  published_at timestamptz
);

alter table case_studies enable row level security;

create policy "case_studies: public can read published"
  on case_studies for select
  using (published_at is not null and published_at <= now());

create policy "case_studies: admin can read all"
  on case_studies for select
  using (is_admin());

create policy "case_studies: admin can insert"
  on case_studies for insert
  with check (is_admin());

create policy "case_studies: admin can update"
  on case_studies for update
  using (is_admin());

create policy "case_studies: admin can delete"
  on case_studies for delete
  using (is_admin());

-- ─────────────────────────────────────────────
-- services
-- ─────────────────────────────────────────────
create table services (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  division text not null check (division in ('business_technology', 'digital_presence', 'technology_partnership')),
  title text not null,
  summary text,
  body text
);

alter table services enable row level security;

create policy "services: public can read"
  on services for select
  using (true);

create policy "services: admin can insert"
  on services for insert
  with check (is_admin());

create policy "services: admin can update"
  on services for update
  using (is_admin());

create policy "services: admin can delete"
  on services for delete
  using (is_admin());

-- ─────────────────────────────────────────────
-- project_inquiries — public form submissions
-- ─────────────────────────────────────────────
create table project_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  phone text,
  project_type text,
  budget_range text,
  timeline text,
  description text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

alter table project_inquiries enable row level security;

create policy "project_inquiries: anyone can insert"
  on project_inquiries for insert
  with check (true);

create policy "project_inquiries: admin can read"
  on project_inquiries for select
  using (is_admin());

create policy "project_inquiries: admin can update"
  on project_inquiries for update
  using (is_admin());
