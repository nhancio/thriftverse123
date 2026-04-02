create policy "Allow owner to delete own product"
  on public.products for delete
  to authenticated
  using (listed_by_uid = auth.uid());
