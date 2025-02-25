import { ReactNode } from "react";
import { Experience } from "@/types";
import { Briefcase } from "lucide-react";

export interface TimelineItem {
  title: string;
  description: string;
  date: string;
  icon?: ReactNode;
}

interface TimelineProps {
  items: Experience[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="-mb-8">
        {items.map((item, index) => (
          <li key={index}>
            <div className="relative pb-8">
              {index !== items.length - 1 && (
                <div
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-start space-x-4">
                <div>
                  <div className="relative px-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Briefcase className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.position}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">{item.period}</p>
                      <div 
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />     
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}