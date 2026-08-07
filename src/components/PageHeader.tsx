interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-brand-black py-16 text-center">
      <div className="mx-auto max-w-[700px] px-6">
        <h1 className="font-heading text-[28px] font-normal uppercase leading-[35px] tracking-[1px] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 font-sans text-base leading-6 text-[#e2e2e2]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
