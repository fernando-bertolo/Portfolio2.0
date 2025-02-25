import { experiences, solutionsbiExperience } from '../../data/mockData';
import { Card } from '../ui/card';
import { Timeline } from '../ui/timeline';

export const Experience = () => {
  return (
    <section id='experience' className="py-20 bg-gray-50 min-h-[calc(100vh-4rem)] scroll-margin-top">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experiências</h2>
        <div className='flex flex-col gap-5'>
          {experiences.map((item) => (
            <div key={item.id}>
              {item.id === 2 ? (
                <Card key={item.id} className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.company}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.city}</p>
                  <Timeline items={solutionsbiExperience} />
                </Card>
              ) : (
                <Card key={item.id} className="p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.position}</h3>
                    <p className="text-gray-600 mb-2">{item.company}</p>
                    <p className="text-gray-500 text-sm">{item.period}</p>
                    <p className="text-gray-500 text-sm mb-4">{item.city}</p>
                    <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};