-- Change default value of approved to true so testimonials are auto-approved
ALTER TABLE public.testimonials ALTER COLUMN approved SET DEFAULT true;