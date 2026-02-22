-- Create saved_products table if it doesn't exist (e.g. 20250105 was not run)
create table if not exists public.saved_products (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, product_id)
);

alter table public.saved_products enable row level security;

-- Drop old policy if it exists (from 20250105)
drop policy if exists "Allow public read saved_products" on public.saved_products;

-- Users can only read their own saved items (for Saved / wishlist page)
create policy "Users can read own saved_products"
  on public.saved_products for select
  to authenticated
  using (auth.uid() = user_id);

-- Authenticated users can insert their own saves (Like button)
create policy "Allow authenticated insert saved_products"
  on public.saved_products for insert
  to authenticated
  with check (user_id = auth.uid());

-- Authenticated users can delete their own saves (Unlike)
create policy "Allow authenticated delete saved_products"
  on public.saved_products for delete
  to authenticated
  using (user_id = auth.uid());
