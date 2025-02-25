import { blogPosts } from '../../data/mockData';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import Lottie from 'lottie-react';
import CommingSoonAnimation from "../../assets/ComingSoonAnimation.json";
import Navbar from '../Navbar';

export const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="py-20 min-h-[calc(100vh-4rem)] scroll-margin-top">
        <div className='flex justify-center items-center'>
          <Lottie animationData={CommingSoonAnimation} style={{ height: "40%", width: "40%" }} />
        </div>
      </div>
    </div>

    // <section id="blog" className="py-20 min-h-[calc(100vh-4rem)] scroll-margin-top">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <h2 className="text-3xl font-bold text-gray-900 mb-8">Blog</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //       {blogPosts.map((post) => (
    //         <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
    //           <img
    //             src={post.imageUrl}
    //             alt={post.title}
    //             className="w-full h-48 object-cover"
    //           />
    //           <div className="p-6">
    //             <h3 className="text-xl font-semibold text-gray-900 mb-2">
    //               {post.title}
    //             </h3>
    //             <div className="flex items-center text-gray-500 text-sm mb-4">
    //               <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
    //               <span className="mx-2">•</span>
    //               <span className="flex items-center">
    //                 <Clock size={16} className="mr-1" />
    //                 {post.readTime}
    //               </span>
    //             </div>
    //             <p className="text-gray-600 mb-4">
    //               {post.content.substring(0, 150)}...
    //             </p>
    //             <button className="text-blue-600 hover:text-blue-800 font-medium">
    //               Read More
    //             </button>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};