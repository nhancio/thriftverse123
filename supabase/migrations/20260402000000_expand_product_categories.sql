alter table public.products
  drop constraint if exists products_category_check;

alter table public.products
  add constraint products_category_check
  check (category in ('iPhone', 'iPad', 'MacBook', 'Mac Mini', 'iMac', 'Watch', 'AirPods', 'iPad Pencil', 'Apple Hub', 'Apple TV'));
