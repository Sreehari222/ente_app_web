import Link from "next/link";

type ItemProps = {
  title: string;
  icon: string;
  href: string;
  danger?: boolean;
};

const AccountItem = ({ title, icon, href, danger }: ItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-lg px-4 py-4 transition
        ${danger 
          ? "bg-red-50 text-red-600 hover:bg-red-100" 
          : "bg-blue-100/70 text-dark dark:text-white hover:bg-blue-200/70 dark:bg-white/5"}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{title}</span>
      </div>

      <span className="text-xl">›</span>
    </Link>
  );
};
