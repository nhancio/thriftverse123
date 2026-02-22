-- Allow listing owners to update their own products (for Edit Listing from UI)
create policy "Allow owner to update own product"
  on public.products for update
  to authenticated
  using (listed_by_uid = auth.uid())
  with check (listed_by_uid = auth.uid());
