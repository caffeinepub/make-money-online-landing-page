import { type ReactNode } from 'react';

interface CTAButtonProps {
  text: string;
  icon: ReactNode;
  description: string;
  link: string;
}

export default function CTAButton({ text, icon, description, link }: CTAButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-300">
          {icon}
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {text}
          </h4>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn More</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
