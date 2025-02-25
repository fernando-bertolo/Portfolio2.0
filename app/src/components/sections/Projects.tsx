import React from 'react';
import { projects } from '../../data/mockData';
import { ExternalLink, Github } from 'lucide-react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

export const Projects = () => {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id='projects' className="mx-auto bg-slate-100 py-20 min-h-[calc(100vh-4rem)] scroll-margin-top">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projetos</h2>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card>
                  <CardContent className="flex items-start justify-center flex-col p-6">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                          <Github size={20} className="mr-1" />
                          Code
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                          <ExternalLink size={20} className="mr-1" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};