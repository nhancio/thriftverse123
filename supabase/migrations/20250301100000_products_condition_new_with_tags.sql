-- Allow "new-with-tags" in products.condition (UI offers "New with tags" as an option)
alter table public.products
  drop constraint if exists products_condition_check;

alter table public.products
  add constraint products_condition_check
  check (condition in ('new', 'new-with-tags', 'like-new', 'gently-used', 'worn'));
